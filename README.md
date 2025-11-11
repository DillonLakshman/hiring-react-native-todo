## 🛠️ Setup & Run Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/tasked.git
cd tasked
```

### 2. Install Dependencies

```bash
yarn install
# or
npm install
```

### 3. Run on Expo Go (Recommended)

Ensure you have [Expo CLI](https://docs.expo.dev/get-started/installation/#installing-expo-cli) installed globally:

```bash
npm install -g expo-cli
```

Start the Expo development server:

```bash
expo start
```

Scan the QR code in your terminal with the [Expo Go app](https://expo.dev/client) on your iOS or Android device to preview.

### 4. Run on iOS Simulator or Android Emulator

- To run on iOS Simulator (macOS):

  ```bash
  expo run:ios
  ```

- To run on Android Emulator:

  ```bash
  expo run:android
  ```

### 5. Web Preview (Optional)

To preview the app in your browser (web):

```bash
expo start --web
```

> **Note:** Local persistence (storage) is optimized for native mobile. Some features (like persistence) use a mobile-native storage layer, so web support is for demo purposes only.

---

## ⚡ Requirements

- Node.js (v16 or higher)
- Yarn or npm
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (Xcode) or Android Studio emulator for local device testing (optional but recommended)

---

## ❓ Troubleshooting

- **Android Issues:** Make sure an Android emulator is running before executing `expo run:android`
- **iOS Issues:** Xcode and required command-line tools must be installed
- **Dependencies:** If you encounter dependency issues, try `yarn install --force` or `npm install --legacy-peer-deps`
- **Persistence:** For React Native device persistence make sure `@react-native-async-storage/async-storage` is installed (already included)

---

## 📝 Environment Variables

No configuration or environment variables are required for basic use.

---
