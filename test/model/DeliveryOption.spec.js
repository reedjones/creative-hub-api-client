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
    describe('DeliveryOption', function() {
      beforeEach(function() {
        instance = new Apicreativehubio.DeliveryOption();
      });

      it('should create an instance of DeliveryOption', function() {
        // TODO: update the code to test DeliveryOption
        expect(instance).to.be.a(Apicreativehubio.DeliveryOption);
      });

      it('should have the property id (base name: "Id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property branchId (base name: "BranchId")', function() {
        // TODO: update the code to test the property branchId
        expect(instance).to.have.property('branchId');
        // expect(instance.branchId).to.be(expectedValueLiteral);
      });

      it('should have the property branchName (base name: "BranchName")', function() {
        // TODO: update the code to test the property branchName
        expect(instance).to.have.property('branchName');
        // expect(instance.branchName).to.be(expectedValueLiteral);
      });

      it('should have the property method (base name: "Method")', function() {
        // TODO: update the code to test the property method
        expect(instance).to.have.property('method');
        // expect(instance.method).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryTime (base name: "DeliveryTime")', function() {
        // TODO: update the code to test the property deliveryTime
        expect(instance).to.have.property('deliveryTime');
        // expect(instance.deliveryTime).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryChargeExcludingSalesTax (base name: "DeliveryChargeExcludingSalesTax")', function() {
        // TODO: update the code to test the property deliveryChargeExcludingSalesTax
        expect(instance).to.have.property('deliveryChargeExcludingSalesTax');
        // expect(instance.deliveryChargeExcludingSalesTax).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryChargeSalesTax (base name: "DeliveryChargeSalesTax")', function() {
        // TODO: update the code to test the property deliveryChargeSalesTax
        expect(instance).to.have.property('deliveryChargeSalesTax');
        // expect(instance.deliveryChargeSalesTax).to.be(expectedValueLiteral);
      });

      it('should have the property estimatedDeliveryDateFrom (base name: "EstimatedDeliveryDateFrom")', function() {
        // TODO: update the code to test the property estimatedDeliveryDateFrom
        expect(instance).to.have.property('estimatedDeliveryDateFrom');
        // expect(instance.estimatedDeliveryDateFrom).to.be(expectedValueLiteral);
      });

      it('should have the property estimatedDeliveryDateTo (base name: "EstimatedDeliveryDateTo")', function() {
        // TODO: update the code to test the property estimatedDeliveryDateTo
        expect(instance).to.have.property('estimatedDeliveryDateTo');
        // expect(instance.estimatedDeliveryDateTo).to.be(expectedValueLiteral);
      });

    });
  });

}));
