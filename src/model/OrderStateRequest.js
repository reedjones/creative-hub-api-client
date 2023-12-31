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
    define(['ApiClient', 'model/OrderState'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderState'));
  } else {
    // Browser globals (root is window)
    if (!root.Apicreativehubio) {
      root.Apicreativehubio = {};
    }
    root.Apicreativehubio.OrderStateRequest = factory(root.Apicreativehubio.ApiClient, root.Apicreativehubio.OrderState);
  }
}(this, function(ApiClient, OrderState) {
  'use strict';

  /**
   * The OrderStateRequest model module.
   * @module model/OrderStateRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderStateRequest</code>.
   * @alias module:model/OrderStateRequest
   * @class
   * @param orderId {Number} 
   * @param orderState {module:model/OrderState} 
   */
  var exports = function(orderId, orderState) {
    this.orderId = orderId;
    this.orderState = orderState;
  };

  /**
   * Constructs a <code>OrderStateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderStateRequest} obj Optional instance to populate.
   * @return {module:model/OrderStateRequest} The populated <code>OrderStateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OrderId'))
        obj.orderId = ApiClient.convertToType(data['OrderId'], 'Number');
      if (data.hasOwnProperty('OrderState'))
        obj.orderState = OrderState.constructFromObject(data['OrderState']);
    }
    return obj;
  }

  /**
   * @member {Number} orderId
   */
  exports.prototype.orderId = undefined;

  /**
   * @member {module:model/OrderState} orderState
   */
  exports.prototype.orderState = undefined;


  return exports;

}));
