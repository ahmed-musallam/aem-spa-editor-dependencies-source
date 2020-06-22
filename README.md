# Unpack Adobe SPA Dependencies

If you are building an SPA with AEM SPA Editor and react, you're most likely using these NPM depepndecies:

- `@adobe/cq-react-editable-components`
- `@adobe/cq-spa-component-mapping`
- `@adobe/cq-spa-page-model-manager`

As of the writing of this repo, Adobe published the above dependencies to NPM. but the source code is not open source and not on github. The published NPM files are only the _minified_ JS and sourcemaps but no source files are published. Additionally, All dependencies above are licensed under `Apache-2.0`.

This repo is a simple repo that will unpack the adobe published sourcemaps and generate the source code to be able to easily read them.

> You could also see the source in chrome if you are developing your app using webpack and do serve sourcemaps (latest version of react-create-app does that)

# :warning: CAUTION :warning:
***Please only use this to browse the source code. Do not include generated code in your repo. Also, if adobe publishes the source for these dependecies on github, let me know so I can delete this repo.***

# Usage

1. Make sure you are using Node 10. I've tested this with node 12, there were some dependecy issues.
2. Clone this repo
3. in `package.json` update the adobe dependency versions to the ones you want to get source for.
4. run `npm start`
5. source code will be in the generated `out` directory.



 