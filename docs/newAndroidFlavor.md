# Adding a new Android App

To integrate a new Android app into your React Native project, follow these steps:

<br>

## 1. Edit the `android/app/build.gradle` file:

In the `android/app/build.gradle` file, add a new product flavor for your app:

```
productFlavors {
    ...

    <!-- Your new app here -->
    {appName} {
        resValue "string", "app_name", "{new app name}"
        applicationId "{bundleId}"
    }
}
```

<br>

## 2. Create a new Flavor folder

Inside the `android/app/src` folder, create a new folder for your app flavor.

<br>

## 3. Add resources

Place necessary resources such as splash screen images and icons inside the newly created flavor folder.

<br>

## 4. Edit the `package.json` file:

In the `package.json` file, add a new script to run your Android app:

```
"scripts": {
  ...

  <!-- Script to run your android app -->
  "android:{appName}": "react-native run-android --appId {bundleId} --mode {appName}Debug",
},

```

Make sure to replace {appName} and {bundleId} with your specific app name and bundle identifier. Customize resources and configurations according to your app's requirements.
