var test = require('tape');
var james = require('./helper.js');

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
