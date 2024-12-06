# Contactor
# Assignment 2 MAPP

## Description

Contactor is an app designed to display a list of saved contacts along with their details. 
The app allows users to import contacts from their device, view and edit contact information, and search through the list of contacts. 
It supports both iOS and Android platforms.

On start-up, the app displays two Dummy-Contacts that can be used for testing functionality.

This is for iOS/Android, not supported by Web.


## Running the App

#### Prerequisites

Before setting up the project, ensure you have the following installed:
Ensure you are using correct version of Expo Go, Expo SDK

- Node.js (v.20+)
- npm (Node Package Manager)
- React Native CLI
- Expo CLI

Open terminal and navigate into the root directory

```bash
cd contactor/contactor
```

Install all necessary dependencies by running:

```bash
npm install
```

To run the application, use the following command:

```bash
npx expo start
```

This will start the Expo development server.


If you're running the app on a Simulator/Emulator, you can use the following commands:
    
- iOS: 
    ```bash
    npx expo start --ios
    ```
- Android: 
    ```bash
    npx expo start --android
    ```

## Known Issues

If you experience issues from the get-go, analyze the error and try running these commands to install necessary libraries independently:

npm install @react-navigation/native

npx expo install expo-file-system

npm install react-native-screens react-native-safe-area-context

npm install @react-navigation/stack

npx expo install expo-file-system

npx expo install expo-image-picker

npm install -g expo-cli

expo install expo-contacts


## Technologies used

    React Native
    React Navigation
    Expo Router
    Expo FileSystem
    Expo ImagePicker
    Expo Contacts
    eslint
    Jest

## Platform Support

### Primary Development Platform
    - iOS/Android
    - Test devices: web, Samsung Galaxy S20 FE, iPhone 12 Pro
    - Web support: via Expo web support (although not available with FileSystems)
    - Tested OS: macOS, Windows, Android, iOS
