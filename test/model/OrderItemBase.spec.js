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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Apicreativehubio);
  }
}(this, function(expect, Apicreativehubio) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('OrderItemBase', function() {
      beforeEach(function() {
        instance = new Apicreativehubio.OrderItemBase();
      });

      it('should create an instance of OrderItemBase', function() {
        // TODO: update the code to test OrderItemBase
        expect(instance).to.be.a(Apicreativehubio.OrderItemBase);
      });

      it('should have the property id (base name: "Id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property productId (base name: "ProductId")', function() {
        // TODO: update the code to test the property productId
        expect(instance).to.have.property('productId');
        // expect(instance.productId).to.be(expectedValueLiteral);
      });

      it('should have the property printOptionId (base name: "PrintOptionId")', function() {
        // TODO: update the code to test the property printOptionId
        expect(instance).to.have.property('printOptionId');
        // expect(instance.printOptionId).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "Quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property externalReference (base name: "ExternalReference")', function() {
        // TODO: update the code to test the property externalReference
        expect(instance).to.have.property('externalReference');
        // expect(instance.externalReference).to.be(expectedValueLiteral);
      });

      it('should have the property externalSku (base name: "ExternalSku")', function() {
        // TODO: update the code to test the property externalSku
        expect(instance).to.have.property('externalSku');
        // expect(instance.externalSku).to.be(expectedValueLiteral);
      });

    });
  });

}));
