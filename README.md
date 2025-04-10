
README
======

This is a skeleton TypeScript project for use when developing web applications. It assumes
Node.js version 22 is used, although it will probably work for other (newer) versions.

This skeleton is moderately opinionated and contains starter files for the following:

+ Configuration settings for both Visual Studio Code and JetBrains IDEs (e.g., WebStorm).
+ TypeScript configuration that enforces strict type checking.
+ ESLint configuration for linting TypeScript code that enforces best practices.
+ Prettier configuration for code formatting.
+ Vite configuration for building and serving the project.
+ Sample TypeScript code to demonstrate the setup.
+ Vitest configuration for running tests with TypeScript.
+ JSDoc comments for documenting TypeScript code.

This skeleton is intended for use in greenfield TypeScript projects without any legacy
JavaScript. The configuration is fairly aggressive in enforcing type safety and best practices,
so it may not be suitable for all projects.

To use this skeleton, follow these steps:

## Preliminaries

1. Clone this repository and delete the `.git` folder to disconnect your clone from the original
   repository.

2. If you have a (preferably) empty repository for your project, copy all the files from this
   skeleton into your repository. If you are building a project without Git, you can work with
   this skeleton directly.

3. This skeleton contains editor configurations for Visual Studio Code (in `.vscode`)and
   JetBrains IDEs (in `.idea`). You can delete either or both of those folders if you are not
   using those editors.

4. Change the name of the project at the top of `package.json` to something more appropriate for
   your project. Adjust the version number in that file as well, if desired.

5. If you are using a JetBrains IDE, rename `.idea/TypeScript.iml` to something more appropriate
   for your project and edit `.idea/modules.xml` accordingly.

6. Add all files and folders to Git and commit the changes (if applicable).

## Setup

1. Use the command `npm install` to install the necessary dependencies into `node_modules`.

2. Review the configuration files to ensure they meet your project's needs. You may want to
   adjust settings in `tsconfig.json`, `.eslint.config.mjs`, `.prettierrc`, and the other
   configuration files in the project root.

## Testing

This skeleton contains a sample `index.html` and `src/main.ts` that demonstrate the setup.

To run the development web server and view the sample, use the command:

```bash
npm run dev
```

To preview the final build, use the command:

```bash
npm run build
npm run preview
```

To run the tests, use the command:

```bash
npm run test
```

Peter Chapin  
spicacality@kelseymountain.org  
