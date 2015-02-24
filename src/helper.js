/**
 * Helper.js
 * We call our helper James!
 * He will assist you through the bright and dark sides of the internet.
 */

var james = (function() {

  /**
   * @description
   * Checks whether the given parameter is an object
   * @param obj
   * @returns {boolean}
   */
  function isObject(obj) {
    var type = typeof obj;
    return !!obj && (type === 'function' || type === 'object');
  }

  /**
   * @description
   * extend an existing object
   * @param obj
   * @returns {*}
   */
  function extend(obj) {
    if (!isObject(obj)) {
      return obj;
    }
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        obj[prop] = source[prop];
      }
    }
    return obj;
  }

  // publish public API
  return {
    isObject: isObject,
    extend: extend
  };
})();


module.exports = james;
