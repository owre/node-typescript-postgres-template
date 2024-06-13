# owre/node-typescript-postgres-template

Project template to kick off your Node.js TypeScript application. Biome for formatting and linting, vitest for speedy testing, and Postgres together with pgweb included.

## Features

* [DevContainer](https://containers.dev/overview): For a consistent and stable development environment.
* [TypeScript](https://www.typescriptlang.org/): Leverage static types and modern JavaScript features. Aliased paths are set up for easy imports of your modules and properly rewritten during build thanks to [typescript-transform-paths](https://github.com/LeDDGroup/typescript-transform-paths).
* [ESM](https://nodejs.org/api/esm.html#introduction): Utilize ECMAScript modules for better interoperability.
* [Biome](https://biomejs.dev/): Format, lint, and more in a fraction of a second. No more wasting your time (and sanity) getting ESLint to work.
* [Vitest](https://vitest.dev/): A next generation, Jest compatible, testing framework. Enables speedy and efficient testing.
* [Postgres](https://www.postgresql.org/) with [pgweb](https://sosedoff.github.io/pgweb/): The World's Most Advanced Open Source Relational Database included together with pgweb for seamless database management. Access the web interface at port 8082.
* [Lefthook] Fast, powerful and simple git hooks manager

## Prepared npm scripts

* **start** - run `src/main.ts` with tsx
* **start:dist** - run built project at `dist/src/main.js` with node,
* **clean** - deletes `dist` and `coverage` directories,
* **prebuild** - automatically runs `clean`, `lint` and `test` scripts when running `build`
* **build** - builds project using release configuration
* **lint** - uses `biome` to lint the project
* **prepare** - automatically runs when dependencies are installed
* **test** - runs test files,
* **test:coverage** - gather test coverage
* **test:watch** - runs test files in watch mode
* **typecheck** - convenient helper to check the type integrity in the project
