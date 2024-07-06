ng new my-workspace --create-application=false
cd my-workspace

ng generate application base
ng generate application ob
ng generate application pb

"projects": {
  "base": {
    ...
    "architect": {
      "serve": {
        "options": {
          "port": 4200
        }
      }
    }
  },
  "ob": {
    ...
    "architect": {
      "serve": {
        "options": {
          "port": 4201
        }
      }
    }
  },
  "pb": {
    ...
    "architect": {
      "serve": {
        "options": {
          "port": 4202
        }
      }
    }
  }
}

ng generate library shared
cd projects/shared
ng generate component homepage --module=./src/lib/shared.module.ts

// moved homepage component folder inside lib

export created entities in sharedmodule
export created entities in public-api.ts
ng build shared

import module in your projects

ng serve project-name


v14.21.3 node
7.7.6 npm



# ProWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

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
