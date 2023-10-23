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
    describe('FilterLogicalOperator', function() {
      beforeEach(function() {
        instance = Apicreativehubio.FilterLogicalOperator;
      });

      it('should create an instance of FilterLogicalOperator', function() {
        // TODO: update the code to test FilterLogicalOperator
        expect(instance).to.be.a('object');
      });

      it('should have the property and', function() {
        expect(instance).to.have.property('and');
        expect(instance.and).to.be("And");
      });

      it('should have the property or', function() {
        expect(instance).to.have.property('or');
        expect(instance.or).to.be("Or");
      });

    });
  });

}));
