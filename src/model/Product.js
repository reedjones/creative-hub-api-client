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
    define(['ApiClient', 'model/PrintOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PrintOption'));
  } else {
    // Browser globals (root is window)
    if (!root.Apicreativehubio) {
      root.Apicreativehubio = {};
    }
    root.Apicreativehubio.Product = factory(root.Apicreativehubio.ApiClient, root.Apicreativehubio.PrintOption);
  }
}(this, function(ApiClient, PrintOption) {
  'use strict';

  /**
   * The Product model module.
   * @module model/Product
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Product</code>.
   * @alias module:model/Product
   * @class
   * @param id {Number} 
   * @param HDPI {Number} 
   * @param VDPI {Number} 
   * @param width {Number} 
   * @param height {Number} 
   * @param dateTaken {Date} 
   * @param hasFramedOptions {Boolean} 
   */
  var exports = function(id, HDPI, VDPI, width, height, dateTaken, hasFramedOptions) {
    this.id = id;
    this.HDPI = HDPI;
    this.VDPI = VDPI;
    this.width = width;
    this.height = height;
    this.dateTaken = dateTaken;
    this.hasFramedOptions = hasFramedOptions;
  };

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Product} obj Optional instance to populate.
   * @return {module:model/Product} The populated <code>Product</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('FileName'))
        obj.fileName = ApiClient.convertToType(data['FileName'], 'String');
      if (data.hasOwnProperty('DisplayName'))
        obj.displayName = ApiClient.convertToType(data['DisplayName'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('StoragePrefix'))
        obj.storagePrefix = ApiClient.convertToType(data['StoragePrefix'], 'String');
      if (data.hasOwnProperty('GUID'))
        obj.GUID = ApiClient.convertToType(data['GUID'], 'String');
      if (data.hasOwnProperty('HDPI'))
        obj.HDPI = ApiClient.convertToType(data['HDPI'], 'Number');
      if (data.hasOwnProperty('VDPI'))
        obj.VDPI = ApiClient.convertToType(data['VDPI'], 'Number');
      if (data.hasOwnProperty('Width'))
        obj.width = ApiClient.convertToType(data['Width'], 'Number');
      if (data.hasOwnProperty('Height'))
        obj.height = ApiClient.convertToType(data['Height'], 'Number');
      if (data.hasOwnProperty('DateTaken'))
        obj.dateTaken = ApiClient.convertToType(data['DateTaken'], 'Date');
      if (data.hasOwnProperty('UserFirstName'))
        obj.userFirstName = ApiClient.convertToType(data['UserFirstName'], 'String');
      if (data.hasOwnProperty('UserLastName'))
        obj.userLastName = ApiClient.convertToType(data['UserLastName'], 'String');
      if (data.hasOwnProperty('UserDefaultArtistName'))
        obj.userDefaultArtistName = ApiClient.convertToType(data['UserDefaultArtistName'], 'String');
      if (data.hasOwnProperty('ArtistName'))
        obj.artistName = ApiClient.convertToType(data['ArtistName'], 'String');
      if (data.hasOwnProperty('Paper'))
        obj.paper = ApiClient.convertToType(data['Paper'], 'String');
      if (data.hasOwnProperty('PrintType'))
        obj.printType = ApiClient.convertToType(data['PrintType'], 'String');
      if (data.hasOwnProperty('HasFramedOptions'))
        obj.hasFramedOptions = ApiClient.convertToType(data['HasFramedOptions'], 'Boolean');
      if (data.hasOwnProperty('PrintOptions'))
        obj.printOptions = ApiClient.convertToType(data['PrintOptions'], [PrintOption]);
      if (data.hasOwnProperty('DescriptionHTML'))
        obj.descriptionHTML = ApiClient.convertToType(data['DescriptionHTML'], 'String');
      if (data.hasOwnProperty('DateTakenString'))
        obj.dateTakenString = ApiClient.convertToType(data['DateTakenString'], 'String');
      if (data.hasOwnProperty('ThumbnailUrl'))
        obj.thumbnailUrl = ApiClient.convertToType(data['ThumbnailUrl'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} fileName
   */
  exports.prototype.fileName = undefined;

  /**
   * @member {String} displayName
   */
  exports.prototype.displayName = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {String} storagePrefix
   */
  exports.prototype.storagePrefix = undefined;

  /**
   * @member {String} GUID
   */
  exports.prototype.GUID = undefined;

  /**
   * @member {Number} HDPI
   */
  exports.prototype.HDPI = undefined;

  /**
   * @member {Number} VDPI
   */
  exports.prototype.VDPI = undefined;

  /**
   * @member {Number} width
   */
  exports.prototype.width = undefined;

  /**
   * @member {Number} height
   */
  exports.prototype.height = undefined;

  /**
   * @member {Date} dateTaken
   */
  exports.prototype.dateTaken = undefined;

  /**
   * @member {String} userFirstName
   */
  exports.prototype.userFirstName = undefined;

  /**
   * @member {String} userLastName
   */
  exports.prototype.userLastName = undefined;

  /**
   * @member {String} userDefaultArtistName
   */
  exports.prototype.userDefaultArtistName = undefined;

  /**
   * @member {String} artistName
   */
  exports.prototype.artistName = undefined;

  /**
   * @member {String} paper
   */
  exports.prototype.paper = undefined;

  /**
   * @member {String} printType
   */
  exports.prototype.printType = undefined;

  /**
   * @member {Boolean} hasFramedOptions
   */
  exports.prototype.hasFramedOptions = undefined;

  /**
   * @member {Array.<module:model/PrintOption>} printOptions
   */
  exports.prototype.printOptions = undefined;

  /**
   * @member {String} descriptionHTML
   */
  exports.prototype.descriptionHTML = undefined;

  /**
   * @member {String} dateTakenString
   */
  exports.prototype.dateTakenString = undefined;

  /**
   * @member {String} thumbnailUrl
   */
  exports.prototype.thumbnailUrl = undefined;


  return exports;

}));