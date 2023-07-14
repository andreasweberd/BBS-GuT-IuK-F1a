# BBSPizzaFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deploy an Angular Application to IIS

Create a production build:
ng build --prod

This builds your application and outputs it to your outDir defined in .angular-cli.json. By default this will be toh\dist.

You can take the contents of this folder and drop it into the root of your Web server and everything will work just fine. For example, on my system IIS is installed in C:\inetpub and hence the default web root is C:\inetpub\wwwroot. After building: deploy your application by copying the contents of your toh project’s dist folder into the wwwroot folder.
