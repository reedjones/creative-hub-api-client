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
    define(['ApiClient', 'model/ApiWebhookKind'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiWebhookKind'));
  } else {
    // Browser globals (root is window)
    if (!root.Apicreativehubio) {
      root.Apicreativehubio = {};
    }
    root.Apicreativehubio.WebhookBase = factory(root.Apicreativehubio.ApiClient, root.Apicreativehubio.ApiWebhookKind);
  }
}(this, function(ApiClient, ApiWebhookKind) {
  'use strict';

  /**
   * The WebhookBase model module.
   * @module model/WebhookBase
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>WebhookBase</code>.
   * @alias module:model/WebhookBase
   * @class
   * @param version {Number} 
   * @param apiWebhookKind {module:model/ApiWebhookKind} 
   * @param eventUtc {Date} 
   */
  var exports = function(version, apiWebhookKind, eventUtc) {
    this.version = version;
    this.apiWebhookKind = apiWebhookKind;
    this.eventUtc = eventUtc;
  };

  /**
   * Constructs a <code>WebhookBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebhookBase} obj Optional instance to populate.
   * @return {module:model/WebhookBase} The populated <code>WebhookBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Version'))
        obj.version = ApiClient.convertToType(data['Version'], 'Number');
      if (data.hasOwnProperty('ApiWebhookKind'))
        obj.apiWebhookKind = ApiWebhookKind.constructFromObject(data['ApiWebhookKind']);
      if (data.hasOwnProperty('EventUtc'))
        obj.eventUtc = ApiClient.convertToType(data['EventUtc'], 'Date');
      if (data.hasOwnProperty('Salt'))
        obj.salt = ApiClient.convertToType(data['Salt'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} version
   */
  exports.prototype.version = undefined;

  /**
   * @member {module:model/ApiWebhookKind} apiWebhookKind
   */
  exports.prototype.apiWebhookKind = undefined;

  /**
   * @member {Date} eventUtc
   */
  exports.prototype.eventUtc = undefined;

  /**
   * @member {String} salt
   */
  exports.prototype.salt = undefined;


  return exports;

}));