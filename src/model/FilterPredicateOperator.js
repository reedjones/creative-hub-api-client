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
    root.Apicreativehubio.FilterPredicateOperator = factory(root.Apicreativehubio.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class FilterPredicateOperator.
   * @enum {String}
   * @readonly
   */
  var exports = {
    /**
     * value: "Contains"
     * @const
     */
    contains: "Contains",

    /**
     * value: "DoesNotContain"
     * @const
     */
    doesNotContain: "DoesNotContain",

    /**
     * value: "EndsWith"
     * @const
     */
    endsWith: "EndsWith",

    /**
     * value: "IsEmpty"
     * @const
     */
    isEmpty: "IsEmpty",

    /**
     * value: "IsEqualTo"
     * @const
     */
    isEqualTo: "IsEqualTo",

    /**
     * value: "IsGreaterThan"
     * @const
     */
    isGreaterThan: "IsGreaterThan",

    /**
     * value: "IsGreaterThanOrEqualTo"
     * @const
     */
    isGreaterThanOrEqualTo: "IsGreaterThanOrEqualTo",

    /**
     * value: "IsLessThan"
     * @const
     */
    isLessThan: "IsLessThan",

    /**
     * value: "IsLessThanOrEqualTo"
     * @const
     */
    isLessThanOrEqualTo: "IsLessThanOrEqualTo",

    /**
     * value: "IsNotEmpty"
     * @const
     */
    isNotEmpty: "IsNotEmpty",

    /**
     * value: "IsNotEqualTo"
     * @const
     */
    isNotEqualTo: "IsNotEqualTo",

    /**
     * value: "IsNotNull"
     * @const
     */
    isNotNull: "IsNotNull",

    /**
     * value: "IsNotNullOrEmpty"
     * @const
     */
    isNotNullOrEmpty: "IsNotNullOrEmpty",

    /**
     * value: "IsNull"
     * @const
     */
    isNull: "IsNull",

    /**
     * value: "IsNullOrEmpty"
     * @const
     */
    isNullOrEmpty: "IsNullOrEmpty",

    /**
     * value: "StartsWith"
     * @const
     */
    startsWith: "StartsWith"
  };

  /**
   * Returns a <code>FilterPredicateOperator</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/FilterPredicateOperator} The enum <code>FilterPredicateOperator</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));
