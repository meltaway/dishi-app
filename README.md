**Environment:**
Node v14.16.0

IOS: Xcode v12.4

Android: Min SDK version 21

**Package manager:**
Yarn v1.22

**Infrastructure setup:**
Follow the guide for React Native CLI https://reactnative.dev/docs/environment-setup

Running :

Clone project from Bitbucket:
   https://github.com/meltaway/dishi-app.git

IOS:

- `yarn install`
- `cd ios`
- `pod install`
- open IOS project in Xcode
- choose active scheme Peeref->Iphone 11(or device that you wish)
- tap the button "build and then run..."

> Blockquote Recommendations:
> if have some problems with lib versions after pod install, run next commands in the ios folder:

- `rm -rf Podfile.lock`
- `rm -rf Pods`
- `pod install`

Android:

- open Android project in Android studio
- choose AVD manager and run any of emulator you wish (ensure you have any emulator installed with a proper SDK version!)

- `npm run android`

> Blockquote Recommendations:
> if have some problems with JS lib versions after yarn install, run next commands in the root folder:

- `rm -rf yarn.lock`
- `rm -rf package-lock.json`
- `rm -rf node_modules`
- `yarn install`
- `cd ios`
- `pod install`
