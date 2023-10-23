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
    root.Apicreativehubio.OrderState = factory(root.Apicreativehubio.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class OrderState.
   * @enum {String}
   * @readonly
   */
  var exports = {
    /**
     * value: "ProcessingPayment"
     * @const
     */
    processingPayment: "ProcessingPayment",

    /**
     * value: "NewOrder"
     * @const
     */
    newOrder: "NewOrder",

    /**
     * value: "ImageFileReceived"
     * @const
     */
    imageFileReceived: "ImageFileReceived",

    /**
     * value: "Printed"
     * @const
     */
    printed: "Printed",

    /**
     * value: "InFraming"
     * @const
     */
    inFraming: "InFraming",

    /**
     * value: "InMounting"
     * @const
     */
    inMounting: "InMounting",

    /**
     * value: "ToBeRedone"
     * @const
     */
    toBeRedone: "ToBeRedone",

    /**
     * value: "MountingStarted"
     * @const
     */
    mountingStarted: "MountingStarted",

    /**
     * value: "FramingComplete"
     * @const
     */
    framingComplete: "FramingComplete",

    /**
     * value: "FramingStarted"
     * @const
     */
    framingStarted: "FramingStarted",

    /**
     * value: "MountingComplete"
     * @const
     */
    mountingComplete: "MountingComplete",

    /**
     * value: "Dispatched"
     * @const
     */
    dispatched: "Dispatched",

    /**
     * value: "ReadyForCollection"
     * @const
     */
    readyForCollection: "ReadyForCollection",

    /**
     * value: "Collected"
     * @const
     */
    collected: "Collected",

    /**
     * value: "Cancelled"
     * @const
     */
    cancelled: "Cancelled",

    /**
     * value: "ForReturn"
     * @const
     */
    forReturn: "ForReturn",

    /**
     * value: "ReturnReceived"
     * @const
     */
    returnReceived: "ReturnReceived",

    /**
     * value: "RefundInitiated"
     * @const
     */
    refundInitiated: "RefundInitiated",

    /**
     * value: "PaymentFailed"
     * @const
     */
    paymentFailed: "PaymentFailed",

    /**
     * value: "Packed"
     * @const
     */
    packed: "Packed",

    /**
     * value: "Delivered"
     * @const
     */
    delivered: "Delivered",

    /**
     * value: "ShippingFailed"
     * @const
     */
    shippingFailed: "ShippingFailed",

    /**
     * value: "OnHold"
     * @const
     */
    onHold: "OnHold",

    /**
     * value: "Dispatch"
     * @const
     */
    dispatch: "Dispatch",

    /**
     * value: "ASFFraming"
     * @const
     */
    aSFFraming: "ASFFraming",

    /**
     * value: "DispatchQC"
     * @const
     */
    dispatchQC: "DispatchQC",

    /**
     * value: "CardRequired"
     * @const
     */
    cardRequired: "CardRequired",

    /**
     * value: "OrderFailed"
     * @const
     */
    orderFailed: "OrderFailed",

    /**
     * value: "DuplicateOrder"
     * @const
     */
    duplicateOrder: "DuplicateOrder",

    /**
     * value: "EmbryonicOrder"
     * @const
     */
    embryonicOrder: "EmbryonicOrder",

    /**
     * value: "SuspendedOrder"
     * @const
     */
    suspendedOrder: "SuspendedOrder",

    /**
     * value: "NotSet"
     * @const
     */
    notSet: "NotSet"
  };

  /**
   * Returns a <code>OrderState</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/OrderState} The enum <code>OrderState</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));