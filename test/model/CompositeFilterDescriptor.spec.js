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
    describe('CompositeFilterDescriptor', function() {
      beforeEach(function() {
        instance = new Apicreativehubio.CompositeFilterDescriptor();
      });

      it('should create an instance of CompositeFilterDescriptor', function() {
        // TODO: update the code to test CompositeFilterDescriptor
        expect(instance).to.be.a(Apicreativehubio.CompositeFilterDescriptor);
      });

      it('should have the property logicalOperator (base name: "LogicalOperator")', function() {
        // TODO: update the code to test the property logicalOperator
        expect(instance).to.have.property('logicalOperator');
        // expect(instance.logicalOperator).to.be(expectedValueLiteral);
      });

      it('should have the property filterDescriptors (base name: "FilterDescriptors")', function() {
        // TODO: update the code to test the property filterDescriptors
        expect(instance).to.have.property('filterDescriptors');
        // expect(instance.filterDescriptors).to.be(expectedValueLiteral);
      });

    });
  });

}));
