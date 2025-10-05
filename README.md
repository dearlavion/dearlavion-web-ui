# DearlavionWebUi

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Recent changes

- Converted the Figma hero design into a responsive Angular standalone component: src/app/homepage/homepage.component.ts/html/css.
- Replaced inline absolute-positioned Figma HTML with responsive Grid/Flexbox layout and media queries for mobile, tablet, and desktop.
- Introduced a pastel yellow and pink color scheme via CSS custom properties and component styles.
- Added Google Fonts (Raleway, Oxanium) in src/index.html.
- Updated app to use the homepage component (<app-homepage/>) and imported HomepageComponent in src/app/app.ts.
- Changed site branding from "Quriarbox" to "Dear Lavion" and updated the document title to "Dear Lavion" in src/index.html.

These changes keep the visual design while improving responsiveness, accessibility, and maintainability.
