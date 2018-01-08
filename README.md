# SmartDEX

Framework for a modern, responsive decentralized exchange

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Debugging in VS Code 

1. Download Chrome Debugging extension via the extensions tab
2. Set up launch.json to either LAUNCH or ATTACH as desired
3. Run the selected configuration of debugger via Debug tab
4. If needed: See documentation at https://github.com/Microsoft/vscode-chrome-debug
5. To set up a specific profile (different than your default) to use with MetaMask installed, make sure to add `"userDataDir" : "${workspaceRoot}/.vscode/chrome"` to your config, and then add metamask to that profile when launched

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

To use prod environment variables run `ng build --prod --env=prod`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
