# README

This is a template TypeScript project for use when developing web applications.

A prerequisite of using this template is Node.js. Use a version that is *at least* version 18
(the template has been tested using version 22.12.0). This template makes use of modern Vite
features that require ECMAScript modules and maybe other things. It also targets modern web
browsers that support ES2020 (or later).

This template is moderately opinionated and contains starter files for the following:

- Configuration settings for both Visual Studio Code and JetBrains IDEs (e.g., WebStorm).
- TypeScript configuration that enforces strict type checking.
- ESLint configuration for linting TypeScript code that enforces best practices.
- Prettier configuration for code formatting.
- Vite configuration for building and serving the project.
- Vitest configuration for running tests with TypeScript.
- Typedoc configuration for extracting JSDoc documentation from TypeScript code.
- Sample TypeScript code to demonstrate the setup.

This template is intended for use in greenfield TypeScript projects without any legacy
JavaScript. The configuration is fairly aggressive in enforcing type safety and best practices,
so it may not be suitable for all projects. However, this template is also front-end agnostic.
It is suitable for projects using plain TypeScript, but with the addition of appropriate
framework-specific packages, it could be extended.

To use this template, follow these steps:

## Preliminaries

1. Clone this repository and delete the `.git` folder to disconnect your clone from the original
   repository.

2. If you have a (preferably) empty repository for your project, copy all the files from this
   template into your repository. If you are building a project without Git, you can work with
   this template directly.

3. This template contains configurations for Visual Studio Code (in `.vscode`)and JetBrains IDEs
   (in `.idea`). You can delete either or both of those folders if you are not using those
   editors. Note that if you open the folder in Visual Studio Code, it may prompt you to install
   recommended extensions based on the `.vscode/extensions.json` file.

4. Change the name of the project at the top of `package.json` to something more appropriate for
   your project. Adjust the version number in that file as well, if desired.

5. If you are using a JetBrains IDE, rename `.idea/TypeScript.iml` to something more appropriate
   for your project and edit `.idea/modules.xml` accordingly.

6. Add all files and folders to Git and commit the changes (if applicable).

## Setup

1. Use the command `npm install` to install the necessary dependencies into `node_modules`.

2. Review the configuration files to ensure they meet your project's needs. You may want to
   adjust settings in `tsconfig.json`, `eslint.config.mjs`, `.prettierrc`, `typedoc.json`,
   `vite.config.mts`, and the other configuration files in the project root. Of course, you can,
   and most likely will, adjust these settings as you develop your application.

## Testing

Before you start writing your own code, it is a good idea to verify that everything is working
as expected. This template contains a trivial `index.html` and `src/main.ts` you can use to
check the various tools provided.

To run ESLint over the entire codebase:

```bash
npm run lint
```

To run Prettier over the entire codebase (this will edit files in place):

```bash
npm run format
```

To generate documentation using Typedoc (this will put the generated HTML in the `docs` folder):

```bash
npm run docs
```

To run the tests:

```bash
npm run test
```

To run the development web server and view the sample application:

```bash
npm run dev
```

To preview the final build:

```bash
npm run build
npm run preview
```

## Where Do I Put My Stuff?

This template assumes you are building a single page application (SPA) where your TypeScript
manipulates the DOM of one HTML document. That document is in the `index.html` file in the root
of the project. Your TypeScript code should go in the `src` folder, and the entry point for your
application is `src/main.ts`.

If you want to build a multipage application, you can create additional HTML files in the root
folder and add corresponding TypeScript entry points in the `src` folder. Just make sure to
configure Vite to recognize those additional entry points in the `vite.config.mts` file.

By default, this template does not engage with any particular front-end framework, but you can
add framework-specific packages to your project as needed.

Each TypeScript file should have a corresponding test file in the `src/__tests__` folder with
the same name but with a `.test.ts` extension. For example, if you have a file `src/example.ts`,
the corresponding test file should be `src/__tests__/example.test.ts`.

You are encouraged to use JSDoc comments in your TypeScript code to document your functions and
classes. Those comments will be extracted into the documentation generated by Typedoc into the
`docs` folder.

The `public` folder is used to store static assets that will be served directly by the web
server, such as images, fonts, and other files that do not require processing by Vite. Anything
placed directly in `public` will be available at the root of your web server. For example, a
file named `yourimage.png` that is put into `public/images` will be accessible at
`http://yourserver/images/yourimage.png`.

To deploy your application, do `npm run build` and upload the contents of the `dist` folder to
your web server.

Enjoy!

Peter Chapin  
spicacality@kelseymountain.org
