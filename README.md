# [Client Scout][homepageURL]
[![NPM][homepageBadge]][homepageURL] 
![Angular CLI version][angularBadge] 
![NPM][npmBadge]  <br/>
By [Hamza Es-saady][linkedinURL]

<!-- Logo -->
<div align="center">
<img src="./src/assets/images/logo.png" alt="Client Scout Logo" width="400px">
</div> <br/> <br/>

<!-- Description -->
**[Client Scout][homepageURL]** is a **client management application** that helps you, as an administrator, to manage your clients with the balance that they owe. Client Scout uses [Firebase][firebaseURL] as a development platform and data is persisted in the cloud Firestore Database.

Client Scout is actually not a multi-user application, but it is provided with a registration feature to help you preview the functionality of the application.

You are free to reuse, copy, modify, and distribute, but you have to give attribution.

## Technologies & Tools
[Client Scout][homepageURL] is created with:
* [Angular 10][angularURL] : Frontend framework
* [Cloud Firestore][firestoreURL] :  Realtime NoSQL Database from Firebase
* [Node.js][nodeURL] : Runtime environment
* [Angular CLI][angularCliURL] : Frontend scaffolding
* [Bulma][BulmaURL] : Layout and styles
* [Font Awesome][fontAwesomeURL] : icons

## Prerequisites
Before installing [Client Scout][homepageURL] you need to:
1. Install [Node.js][nodeURL]
2. Install Angular CLI : `npm i -g @angular/cli`

## Installation and configuration

### Clone the repo
```shell
git clone https://github.com/Kuohamkun/client-scout.git
cd client-scout
```
### Install npm packages
Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs `lite-server` on port `3000`.

Shut it down manually with `Ctrl-C`.

## Run
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will run and it will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help
This project was generated with [Angular CLI][angularCliGH] version 10.0.4. <br/>
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README][angularCliREADME].

## :sparkling_heart: Support me

I just start to open-source almost everything I can, and I try to reply to everyone needing help using these projects.
However, If you are using this project and happy with it and just want to **encourage** me to continue creating stuff.

- **Giving proper credit when you use it, linking back to it :D**
- **Starring and sharing the project :rocket:**

Thanks! :heart:

---

Contributions are welcome! <3

Made with :heart: and Passion.


<!-- IDENTIFIERS ------------------------------------------------------------->
[homepageURL]: https://client-scout.web.app/
[linkedinURL]: https://www.linkedin.com/in/essaadyhamza/
[angularURL]: https://angular.io 
[nodeURL]: https://nodejs.org
[angularCliURL]: https://cli.angular.io
[angularCliGH]: https://github.com/angular/angular-cli
[angularCliREADME]: https://github.com/angular/angular-cli/blob/master/README.md
[BulmaURL]: https://bulma.io/
[fontAwesomeURL]: http://fontawesome.com
[firestoreURL]: https://firebase.google.com/docs/firestore
[firebaseURL]: https://firebase.google.com/
[angularBadge]: https://img.shields.io/badge/Angular_CLI-10.0.4-DD0031?style=flat-square&logo=angular
[homepageBadge]: https://img.shields.io/badge/VISIT_HOME_PAGE-fb8500?style=flat-square
[npmBadge]: https://img.shields.io/npm/v/npm?color=CB3837&logo=NPM&style=flat-square