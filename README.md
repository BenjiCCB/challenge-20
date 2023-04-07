# ReadMe - Module 19 Challenge 📝

## Description 

This progressive web app is a browser-based text editor, featuring a number of data persistence techniques. Through the app, users can add text, and click off the main window to store the info to the IndexedDB browser databse, which can then be redisplayed across page refreshes.  The app uses webpack to conolidate all files for distribution, confirm backwards-compatibility of javascript, and create a manifest that can be used to download the app so as to run standalone locally.  The app also uses service workers to cache content, to minimize load times and allow for offline interaction

View below for more info, as well as the github repo, the heroku link, and a screenshot of the app in action.  

Github: [link here](https://github.com/BenjiCCB/challenge-19)

Heroku: [link here](https://ccb19-jate.herokuapp.com)

![screenshot](./client/src/images/appshot.png)

---

## Table of Contents 

* [Descripton](#description)

* [Installation Instructions](#installation-instructions)

* [Usage Information](#usage-information)

* [App License](#app-license)

* [Contribution Guidelines](#contribution-guidelines)

* [Testing Instructions](#testing-instructions)

* [Questions](#questions)

---

## Installation Instructions 

To install, a user must run npm install on the top level package.json, as well as those of the client and server folders.  The user will then need to call npm run build, to compile the dist folder.  To run the app, a user can then call npm run start (for production mode) or npm run start:dev (for development mode).  The app will then run on port 3000

---

## Usage Information 

Once a user's application is running, they can use the main interface to add or remove text.  On clicking off the main window, changes are saved to the browser's IndexedDB database to store across page sessions.  A user can also download the app by hitting the install button, which will create a local version the progressive web app to use offline and otherwise

Notes:
* The app's ASCII-art main display will show on intital site visit, or after clearing site data from the browser's console
* The local, downloaded version of the app will stay in sync with the browser version
* On download, the app will no longer display the install prompt, unless/until the app is uninstalled locally
* To uninstall the local app, simply click the 3-dot menu in the top right, and select uninstall

---

## App License 

This app is covered under the following license: None

---

## Contribution Guidelines 

This app was developed indepentently, though all suggestions are welcome

---

## Testing Instructions 

Feel free to try finding bugs, although hopefully there shouldn't be any!

---

## Questions 

For more information and questions, please contact me at <bensdecker@gmail.com> or by visiting my [github account](https://github.com/benjiCCB)