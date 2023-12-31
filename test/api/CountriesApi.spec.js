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

  beforeEach(function() {
    instance = new Apicreativehubio.CountriesApi();
  });

  describe('(package)', function() {
    describe('CountriesApi', function() {
      describe('countriesGetV1', function() {
        it('should call countriesGetV1 successfully', function(done) {
          // TODO: uncomment, update parameter values for countriesGetV1 call and complete the assertions
          /*
          var id = 56;

          instance.countriesGetV1(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Apicreativehubio.Country);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);
            expect(data.code).to.be.a('string');
            expect(data.code).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('countriesQueryV1', function() {
        it('should call countriesQueryV1 successfully', function(done) {
          // TODO: uncomment, update parameter values for countriesQueryV1 call and complete the assertions
          /*
          var opts = {};
          opts.request = new Apicreativehubio.CollectionRequest();
          opts.request.page = 0;
          opts.request.pageSize = 0;
          opts.request.filter = new Apicreativehubio.IFilterDescriptor();
          opts.request.sorts = [new Apicreativehubio.SortDescriptor()];
          opts.request.sorts[0].member = "";
          opts.request.sorts[0].sortDirection = new Apicreativehubio.SortDirection();

          instance.countriesQueryV1(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Apicreativehubio.CollectionResultOfCountry);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Apicreativehubio.Country);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.code).to.be.a('string');
                expect(data.code).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");

                      }
            }
            expect(data.total).to.be.a('number');
            expect(data.total).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
