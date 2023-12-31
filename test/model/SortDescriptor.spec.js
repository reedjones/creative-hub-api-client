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
    describe('SortDescriptor', function() {
      beforeEach(function() {
        instance = new Apicreativehubio.SortDescriptor();
      });

      it('should create an instance of SortDescriptor', function() {
        // TODO: update the code to test SortDescriptor
        expect(instance).to.be.a(Apicreativehubio.SortDescriptor);
      });

      it('should have the property member (base name: "Member")', function() {
        // TODO: update the code to test the property member
        expect(instance).to.have.property('member');
        // expect(instance.member).to.be(expectedValueLiteral);
      });

      it('should have the property sortDirection (base name: "SortDirection")', function() {
        // TODO: update the code to test the property sortDirection
        expect(instance).to.have.property('sortDirection');
        // expect(instance.sortDirection).to.be(expectedValueLiteral);
      });

    });
  });

}));
