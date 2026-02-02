# ----------------------------
# STAGE 1: React Web Build (base: /app/)
# ----------------------------
FROM node:18-alpine AS web-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ----------------------------
# STAGE 2: Android Build (base: /)
# ----------------------------
FROM node:18-alpine AS android-web-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Build mit base "/" für Android/Capacitor
RUN npm run build -- --mode production --base=/

# ----------------------------
# STAGE 3: Android APK Build
# ----------------------------
FROM reactnativecommunity/react-native-android:latest AS android-build

# FIX: Java 21 installieren, da das Docker Image nur Java 17 hat
RUN apt-get update && \
    apt-get install -y openjdk-21-jdk && \
    apt-get clean;

# Umgebungsvariable auf Java 21 setzen
ENV JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
ENV PATH=$JAVA_HOME/bin:$PATH

WORKDIR /app

# Kopiere Source mit Android-spezifischem Build
COPY --from=android-web-build /app /app

# Capacitor Sync
RUN npx cap sync android

WORKDIR /app/android

# Rechte für Gradle Wrapper
RUN chmod +x ./gradlew

# Build starten (Java 21 wird nun genutzt)
RUN ./gradlew assembleDebug

# ----------------------------
# STAGE 4: Serving (Nginx)
# ----------------------------
FROM nginx:alpine

# App in /app Unterverzeichnis
RUN mkdir -p /usr/share/nginx/html/app
COPY --from=web-build /app/dist /usr/share/nginx/html/app

# Landing Page in /landing und root
RUN mkdir -p /usr/share/nginx/html/landing
COPY --from=web-build /app/landing /usr/share/nginx/html/landing

# Downloads Verzeichnis für APK
RUN mkdir -p /usr/share/nginx/html/downloads
COPY --from=android-build /app/android/app/build/outputs/apk/debug/app-debug.apk /usr/share/nginx/html/downloads/notentracker.apk

# Nginx Konfiguration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]