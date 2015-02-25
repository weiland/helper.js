[![devDependency Status](https://david-dm.org/weiland/helper.js/dev-status.svg)](https://david-dm.org/weiland/helper.js#info=devDependencies)
[![Build Status](https://travis-ci.org/weiland/helper.js.svg?branch=master)](https://travis-ci.org/weiland/helper.js)
[![Code Climate](https://codeclimate.com/github/weiland/helper.js/badges/gpa.svg)](https://codeclimate.com/github/weiland/helper.js)
[![Test Coverage](https://codeclimate.com/github/weiland/helper.js/badges/coverage.svg)](https://codeclimate.com/github/weiland/helper.js)

# helper.js - james

> currently wip

## Prerequisites
make sure to have installed node.js and npm

## Installation
```bash
# install dependencies
npm install
```

## Development

### Source
The source is located in `src/`

### Tests
Tests are located in `test/`

    $ npm test


### js code validation
validating js code via jshint and jscs

    $ npm run validate



## Technologies

### node & npm package & bower
This lib is going to be published as an npm and bower package to be easily included into projects

### tape
for testing: 
```javascript
var test = require('tape');
test('name', function(t) {
  t.ok(true, 'should be ok');
});
```

### jsDoc
documenting the js code with **jsDoc**

### travis ci 
continuous integration with travis ci

### code climate
check and verify code with codeclimate

### testling
unfortunately testling is broken since a few months :(  
usually, it would test the code in multiple browsers

### editorconfig
basic configuration such as trailing whitespace, empty line on end and 2 soft tabs

### tasks
tasks and dependencies are defined in the package.json

### jshint
code quality and detects potential errors and problems

### jscs
code style linter. ensures that the code follows our conventions

### plato
code visualization and static analysis

## Contributing
1. Fork the repository [https://github.com/weiland/helper.js/fork](https://github.com/weiland/helper.js/fork)
2. Create a feature branch `git checkout -b cool-feature`
3. Commit all your changes `git commit -am 'add fancy feature'`
4. Push to the branch `git push origin cool-feature`
5. Create a new Pull Request on GitHub

[![browser support](https://ci.testling.com/weiland/helper.js.png)](https://ci.testling.com/$YOUR_USERNAME_HERE/max-by)

