# generator-angular-feature

This generator creates a directory and the most common files needed to develop a
new feature for an angular app.

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

## Usage

```
node index.js name_of_feature
```

## Further information

This generator is inspired by [John Papa's](https://twitter.com/John_Papa) [AngularJS Style Guide](https://github.com/johnpapa/angularjs-styleguide).
