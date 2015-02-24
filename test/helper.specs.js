var test = require('tape');
var james = require('../src/helper.js');

test('isObject', function(t) {
  t.ok(james.isObject({hello: 'obj'}), 'object is an object');
  t.ok(james.isObject([0,1]), 'an array is an object as well');
  t.ok(!james.isObject(null), 'null is no object');
  t.ok(!james.isObject(false), 'false is neither an object');
  t.ok(!james.isObject(true), 'true is neither an object');
  t.ok(!james.isObject(42), 'int is no object');
  t.ok(!james.isObject('hello'), 'string is neither an object');
  t.end();
});

test('extend', function(t) {
  t.equal(james.extend({}, {a: 'b'}).a, 'b', 'can extend an object with the attributes of another');
  t.equal(james.extend({a: 'c'}, {a: 'b'}).a, 'b', 'properties in source override destination');
  t.equal(james.extend({c: 'd'}, {a: 'b'}).c, 'd', 'properties not in source don\'t get overriden');
  t.end();
});

test('isArray', function(t) {
  var isArray = james.isArray;
  t.ok(!isArray(undefined), 'undefined is not an array');
  t.ok(!isArray(arguments), 'arguments object is not an array');
  t.ok(isArray([0, 1, 2]), 'array is an array');
  t.ok(isArray([]), 'empty array is still an array');
  t.end();
});
