# generator-angular-feature [![Build Status](https://travis-ci.org/GregOnNet/generator-angular-feature.svg?branch=master)](https://travis-ci.org/GregOnNet/generator-angular-feature)

This generator creates a directory and the most common files needed to develop a
new feature for an angular app.

## Usage

```
node index.js [app].[feature]
```

## Directory structure

```
├──  feature/
│   ├──  feature.module.js  // to define module dependencies
│   ├──  feature.routes.js  // to define the routes
│   ├──  feature.js         // the controller
│   └──  feature.html       // the template
```

## Comes with git

If a `git repository` is detected a new branch will be created and checked out:

```
feature/[name_of_feature]
```

## Based on snippets

The generator uses `.js-files` containing placeholders for the name of the feature.
[Handlebars.js](https://github.com/wycats/handlebars.js) is used to compile these snippets.

## Further information

This generator is inspired by [John Papa's](https://twitter.com/John_Papa) [AngularJS Style Guide](https://github.com/johnpapa/angularjs-styleguide).
