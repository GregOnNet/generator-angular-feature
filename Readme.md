# This tool is not ready to use!

# generator-angular-feature [![Build Status](https://travis-ci.org/GregOnNet/generator-angular-feature.svg?branch=master)](https://travis-ci.org/GregOnNet/generator-angular-feature)

This generator creates a directory and the most common files needed to develop a
new feature for an angular app.

This generator is inspired by [John Papa's](https://twitter.com/John_Papa) [AngularJS Style Guide](https://github.com/johnpapa/angularjs-styleguide).

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

## feature.js

feature.js provides a method `parse`. This method takes one parameter specifying the name of the app and the name of the feature seperated by a dot (`app.feature`).
The parameter will be parsed and you receive an object containing two fields.

| function                   | further information      | callback                     |
|--------------------------------------------------------------------------------------|
| `parse(argv, callback)`    | argv = console arguments | function(error, **app**) { } |

### app

```javascript
{
  name : 'app-name',
  feature : 'feature-name'
}
```

This object is used to generate the angular modules and the corresponding file names.
