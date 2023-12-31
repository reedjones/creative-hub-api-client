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
    root.Apicreativehubio.OrderConfirmedRequest = factory(root.Apicreativehubio.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderConfirmedRequest model module.
   * @module model/OrderConfirmedRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderConfirmedRequest</code>.
   * @alias module:model/OrderConfirmedRequest
   * @class
   * @param orderId {Number} 
   * @param deliveryOptionId {Number} 
   * @param deliveryChargeExcludingSalesTax {Number} 
   * @param deliveryChargeSalesTax {Number} 
   */
  var exports = function(orderId, deliveryOptionId, deliveryChargeExcludingSalesTax, deliveryChargeSalesTax) {
    this.orderId = orderId;
    this.deliveryOptionId = deliveryOptionId;
    this.deliveryChargeExcludingSalesTax = deliveryChargeExcludingSalesTax;
    this.deliveryChargeSalesTax = deliveryChargeSalesTax;
  };

  /**
   * Constructs a <code>OrderConfirmedRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderConfirmedRequest} obj Optional instance to populate.
   * @return {module:model/OrderConfirmedRequest} The populated <code>OrderConfirmedRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OrderId'))
        obj.orderId = ApiClient.convertToType(data['OrderId'], 'Number');
      if (data.hasOwnProperty('DeliveryOptionId'))
        obj.deliveryOptionId = ApiClient.convertToType(data['DeliveryOptionId'], 'Number');
      if (data.hasOwnProperty('DeliveryChargeExcludingSalesTax'))
        obj.deliveryChargeExcludingSalesTax = ApiClient.convertToType(data['DeliveryChargeExcludingSalesTax'], 'Number');
      if (data.hasOwnProperty('DeliveryChargeSalesTax'))
        obj.deliveryChargeSalesTax = ApiClient.convertToType(data['DeliveryChargeSalesTax'], 'Number');
      if (data.hasOwnProperty('ExternalReference'))
        obj.externalReference = ApiClient.convertToType(data['ExternalReference'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} orderId
   */
  exports.prototype.orderId = undefined;

  /**
   * @member {Number} deliveryOptionId
   */
  exports.prototype.deliveryOptionId = undefined;

  /**
   * @member {Number} deliveryChargeExcludingSalesTax
   */
  exports.prototype.deliveryChargeExcludingSalesTax = undefined;

  /**
   * @member {Number} deliveryChargeSalesTax
   */
  exports.prototype.deliveryChargeSalesTax = undefined;

  /**
   * @member {String} externalReference
   */
  exports.prototype.externalReference = undefined;


  return exports;

}));
