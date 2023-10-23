/*
 * api.creativehub.io
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.33
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Apicreativehubio) {
      root.Apicreativehubio = {};
    }
    root.Apicreativehubio.SortDirection = factory(root.Apicreativehubio.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class SortDirection.
   * @enum {String}
   * @readonly
   */
  var exports = {
    /**
     * value: "Ascending"
     * @const
     */
    ascending: "Ascending",

    /**
     * value: "Descending"
     * @const
     */
    descending: "Descending"
  };

  /**
   * Returns a <code>SortDirection</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/SortDirection} The enum <code>SortDirection</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));
