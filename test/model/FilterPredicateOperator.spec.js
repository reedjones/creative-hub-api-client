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
    describe('FilterPredicateOperator', function() {
      beforeEach(function() {
        instance = Apicreativehubio.FilterPredicateOperator;
      });

      it('should create an instance of FilterPredicateOperator', function() {
        // TODO: update the code to test FilterPredicateOperator
        expect(instance).to.be.a('object');
      });

      it('should have the property contains', function() {
        expect(instance).to.have.property('contains');
        expect(instance.contains).to.be("Contains");
      });

      it('should have the property doesNotContain', function() {
        expect(instance).to.have.property('doesNotContain');
        expect(instance.doesNotContain).to.be("DoesNotContain");
      });

      it('should have the property endsWith', function() {
        expect(instance).to.have.property('endsWith');
        expect(instance.endsWith).to.be("EndsWith");
      });

      it('should have the property isEmpty', function() {
        expect(instance).to.have.property('isEmpty');
        expect(instance.isEmpty).to.be("IsEmpty");
      });

      it('should have the property isEqualTo', function() {
        expect(instance).to.have.property('isEqualTo');
        expect(instance.isEqualTo).to.be("IsEqualTo");
      });

      it('should have the property isGreaterThan', function() {
        expect(instance).to.have.property('isGreaterThan');
        expect(instance.isGreaterThan).to.be("IsGreaterThan");
      });

      it('should have the property isGreaterThanOrEqualTo', function() {
        expect(instance).to.have.property('isGreaterThanOrEqualTo');
        expect(instance.isGreaterThanOrEqualTo).to.be("IsGreaterThanOrEqualTo");
      });

      it('should have the property isLessThan', function() {
        expect(instance).to.have.property('isLessThan');
        expect(instance.isLessThan).to.be("IsLessThan");
      });

      it('should have the property isLessThanOrEqualTo', function() {
        expect(instance).to.have.property('isLessThanOrEqualTo');
        expect(instance.isLessThanOrEqualTo).to.be("IsLessThanOrEqualTo");
      });

      it('should have the property isNotEmpty', function() {
        expect(instance).to.have.property('isNotEmpty');
        expect(instance.isNotEmpty).to.be("IsNotEmpty");
      });

      it('should have the property isNotEqualTo', function() {
        expect(instance).to.have.property('isNotEqualTo');
        expect(instance.isNotEqualTo).to.be("IsNotEqualTo");
      });

      it('should have the property isNotNull', function() {
        expect(instance).to.have.property('isNotNull');
        expect(instance.isNotNull).to.be("IsNotNull");
      });

      it('should have the property isNotNullOrEmpty', function() {
        expect(instance).to.have.property('isNotNullOrEmpty');
        expect(instance.isNotNullOrEmpty).to.be("IsNotNullOrEmpty");
      });

      it('should have the property isNull', function() {
        expect(instance).to.have.property('isNull');
        expect(instance.isNull).to.be("IsNull");
      });

      it('should have the property isNullOrEmpty', function() {
        expect(instance).to.have.property('isNullOrEmpty');
        expect(instance.isNullOrEmpty).to.be("IsNullOrEmpty");
      });

      it('should have the property startsWith', function() {
        expect(instance).to.have.property('startsWith');
        expect(instance.startsWith).to.be("StartsWith");
      });

    });
  });

}));
