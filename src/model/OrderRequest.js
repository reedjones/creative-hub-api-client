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
    define(['ApiClient', 'model/Address', 'model/OrderBase', 'model/OrderItemRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./OrderBase'), require('./OrderItemRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Apicreativehubio) {
      root.Apicreativehubio = {};
    }
    root.Apicreativehubio.OrderRequest = factory(root.Apicreativehubio.ApiClient, root.Apicreativehubio.Address, root.Apicreativehubio.OrderBase, root.Apicreativehubio.OrderItemRequest);
  }
}(this, function(ApiClient, Address, OrderBase, OrderItemRequest) {
  'use strict';

  /**
   * The OrderRequest model module.
   * @module model/OrderRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderRequest</code>.
   * @alias module:model/OrderRequest
   * @class
   * @extends module:model/OrderBase
   * @param id {Number} 
   * @param firstName {String} 
   * @param lastName {String} 
   * @param email {String} 
   * @param shippingAddress {module:model/Address} 
   * @param orderItems {Array.<module:model/OrderItemRequest>} 
   */
  var exports = function(id, firstName, lastName, email, shippingAddress, orderItems) {
    OrderBase.call(this, id, firstName, lastName, email, shippingAddress);
    this.orderItems = orderItems;
  };

  /**
   * Constructs a <code>OrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderRequest} obj Optional instance to populate.
   * @return {module:model/OrderRequest} The populated <code>OrderRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      OrderBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('OrderItems'))
        obj.orderItems = ApiClient.convertToType(data['OrderItems'], [OrderItemRequest]);
    }
    return obj;
  }

  exports.prototype = Object.create(OrderBase.prototype);
  exports.prototype.constructor = exports;
  /**
   * @member {Array.<module:model/OrderItemRequest>} orderItems
   */
  exports.prototype.orderItems = undefined;


  return exports;

}));