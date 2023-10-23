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
    define(['ApiClient', 'model/Address', 'model/DeliveryOption', 'model/OrderItemResponse', 'model/OrderResponse', 'model/OrderState'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./DeliveryOption'), require('./OrderItemResponse'), require('./OrderResponse'), require('./OrderState'));
  } else {
    // Browser globals (root is window)
    if (!root.Apicreativehubio) {
      root.Apicreativehubio = {};
    }
    root.Apicreativehubio.OrderEmbryonicResponse = factory(root.Apicreativehubio.ApiClient, root.Apicreativehubio.Address, root.Apicreativehubio.DeliveryOption, root.Apicreativehubio.OrderItemResponse, root.Apicreativehubio.OrderResponse, root.Apicreativehubio.OrderState);
  }
}(this, function(ApiClient, Address, DeliveryOption, OrderItemResponse, OrderResponse, OrderState) {
  'use strict';

  /**
   * The OrderEmbryonicResponse model module.
   * @module model/OrderEmbryonicResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderEmbryonicResponse</code>.
   * @alias module:model/OrderEmbryonicResponse
   * @class
   * @extends module:model/OrderResponse
   * @param id {Number} 
   * @param firstName {String} 
   * @param lastName {String} 
   * @param email {String} 
   * @param shippingAddress {module:model/Address} 
   * @param orderItems {Array.<module:model/OrderItemResponse>} 
   * @param orderState {module:model/OrderState} 
   * @param dateCreated {Date} 
   * @param printCostExcludingSalesTax {Number} 
   * @param printCostSalesTax {Number} 
   * @param totalExcludingSalesTax {Number} 
   * @param totalSalesTax {Number} 
   * @param isPaid {Boolean} 
   * @param deliveryOptions {Array.<module:model/DeliveryOption>} 
   */
  var exports = function(id, firstName, lastName, email, shippingAddress, orderItems, orderState, dateCreated, printCostExcludingSalesTax, printCostSalesTax, totalExcludingSalesTax, totalSalesTax, isPaid, deliveryOptions) {
    OrderResponse.call(this, id, firstName, lastName, email, shippingAddress, orderItems, orderState, dateCreated, printCostExcludingSalesTax, printCostSalesTax, totalExcludingSalesTax, totalSalesTax, isPaid);
    this.deliveryOptions = deliveryOptions;
  };

  /**
   * Constructs a <code>OrderEmbryonicResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderEmbryonicResponse} obj Optional instance to populate.
   * @return {module:model/OrderEmbryonicResponse} The populated <code>OrderEmbryonicResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      OrderResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('DeliveryOptions'))
        obj.deliveryOptions = ApiClient.convertToType(data['DeliveryOptions'], [DeliveryOption]);
    }
    return obj;
  }

  exports.prototype = Object.create(OrderResponse.prototype);
  exports.prototype.constructor = exports;
  /**
   * @member {Array.<module:model/DeliveryOption>} deliveryOptions
   */
  exports.prototype.deliveryOptions = undefined;


  return exports;

}));
