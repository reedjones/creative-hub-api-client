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
    instance = new Apicreativehubio.ProductsApi();
  });

  describe('(package)', function() {
    describe('ProductsApi', function() {
      describe('productsGetV1', function() {
        it('should call productsGetV1 successfully', function(done) {
          // TODO: uncomment, update parameter values for productsGetV1 call and complete the assertions
          /*
          var id = 56;

          instance.productsGetV1(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Apicreativehubio.Product);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);
            expect(data.fileName).to.be.a('string');
            expect(data.fileName).to.be("");
            expect(data.displayName).to.be.a('string');
            expect(data.displayName).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.storagePrefix).to.be.a('string');
            expect(data.storagePrefix).to.be("");
            expect(data.GUID).to.be.a('string');
            expect(data.GUID).to.be("");
            expect(data.HDPI).to.be.a('number');
            expect(data.HDPI).to.be(0.0);
            expect(data.VDPI).to.be.a('number');
            expect(data.VDPI).to.be(0.0);
            expect(data.width).to.be.a('number');
            expect(data.width).to.be(0);
            expect(data.height).to.be.a('number');
            expect(data.height).to.be(0);
            expect(data.dateTaken).to.be.a(Date);
            expect(data.dateTaken).to.be(new Date());
            expect(data.userFirstName).to.be.a('string');
            expect(data.userFirstName).to.be("");
            expect(data.userLastName).to.be.a('string');
            expect(data.userLastName).to.be("");
            expect(data.userDefaultArtistName).to.be.a('string');
            expect(data.userDefaultArtistName).to.be("");
            expect(data.artistName).to.be.a('string');
            expect(data.artistName).to.be("");
            expect(data.paper).to.be.a('string');
            expect(data.paper).to.be("");
            expect(data.printType).to.be.a('string');
            expect(data.printType).to.be("");
            expect(data.hasFramedOptions).to.be.a('boolean');
            expect(data.hasFramedOptions).to.be(false);
            {
              let dataCtr = data.printOptions;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Apicreativehubio.PrintOption);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.price).to.be.a('number');
                expect(data.price).to.be();
                expect(data.costPerItem).to.be.a('number');
                expect(data.costPerItem).to.be();
                expect(data.shortSideInches).to.be.a('number');
                expect(data.shortSideInches).to.be();
                expect(data.longSideInches).to.be.a('number');
                expect(data.longSideInches).to.be();
                expect(data.shortSideMM).to.be.a('number');
                expect(data.shortSideMM).to.be();
                expect(data.longSideMM).to.be.a('number');
                expect(data.longSideMM).to.be();
                expect(data.borderTopMM).to.be.a('number');
                expect(data.borderTopMM).to.be();
                expect(data.borderLeftMM).to.be.a('number');
                expect(data.borderLeftMM).to.be();
                expect(data.borderRightMM).to.be.a('number');
                expect(data.borderRightMM).to.be();
                expect(data.borderBottomMM).to.be.a('number');
                expect(data.borderBottomMM).to.be();
                expect(data.wMBorderTopMM).to.be.a('number');
                expect(data.wMBorderTopMM).to.be();
                expect(data.wMBorderLeftMM).to.be.a('number');
                expect(data.wMBorderLeftMM).to.be();
                expect(data.wMBorderRightMM).to.be.a('number');
                expect(data.wMBorderRightMM).to.be();
                expect(data.wMBorderBottomMM).to.be.a('number');
                expect(data.wMBorderBottomMM).to.be();
                expect(data.wMColour).to.be.a('string');
                expect(data.wMColour).to.be("");
                expect(data.isAvailable).to.be.a('boolean');
                expect(data.isAvailable).to.be(false);
                expect(data.sellAsEdition).to.be.a('boolean');
                expect(data.sellAsEdition).to.be(false);
                expect(data.editionsLimit).to.be.a('number');
                expect(data.editionsLimit).to.be(0);
                expect(data.lastUpdated).to.be.a(Date);
                expect(data.lastUpdated).to.be(new Date());
                expect(data.hasFrame).to.be.a('boolean');
                expect(data.hasFrame).to.be(false);
                expect(data.hasCanvas).to.be.a('boolean');
                expect(data.hasCanvas).to.be(false);
                expect(data.frameDescription).to.be.a('string');
                expect(data.frameDescription).to.be("");
                expect(data.frameWidthMM).to.be.a('number');
                expect(data.frameWidthMM).to.be(0);
                expect(data.widthMM).to.be.a('number');
                expect(data.widthMM).to.be();
                expect(data.heightMM).to.be.a('number');
                expect(data.heightMM).to.be();
                expect(data.editionsSold).to.be.a('number');
                expect(data.editionsSold).to.be(0);
                expect(data.currencyCode).to.be.a('string');
                expect(data.currencyCode).to.be("");
                expect(data.previewFileNameStandard).to.be.a('string');
                expect(data.previewFileNameStandard).to.be("");
                expect(data.previewFileNameCloseUp).to.be.a('string');
                expect(data.previewFileNameCloseUp).to.be("");
                expect(data.verticalBorderMM).to.be.a('number');
                expect(data.verticalBorderMM).to.be();
                expect(data.horizontalBorderMM).to.be.a('number');
                expect(data.horizontalBorderMM).to.be();
                expect(data.longBorderMM).to.be.a('number');
                expect(data.longBorderMM).to.be();
                expect(data.shortBorderMM).to.be.a('number');
                expect(data.shortBorderMM).to.be();
                expect(data.verticalWMBorderMM).to.be.a('number');
                expect(data.verticalWMBorderMM).to.be();
                expect(data.horizontalWMBorderMM).to.be.a('number');
                expect(data.horizontalWMBorderMM).to.be();
                expect(data.longMountMM).to.be.a('number');
                expect(data.longMountMM).to.be();
                expect(data.shortMountMM).to.be.a('number');
                expect(data.shortMountMM).to.be();
                expect(data.totalWidthMM).to.be.a('number');
                expect(data.totalWidthMM).to.be();
                expect(data.totalHeightMM).to.be.a('number');
                expect(data.totalHeightMM).to.be();
                expect(data.totalLongSideMM).to.be.a('number');
                expect(data.totalLongSideMM).to.be();
                expect(data.totalShortSideMM).to.be.a('number');
                expect(data.totalShortSideMM).to.be();
                expect(data.totalLongSideInches).to.be.a('number');
                expect(data.totalLongSideInches).to.be();
                expect(data.totalShortSideInches).to.be.a('number');
                expect(data.totalShortSideInches).to.be();
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.shortDescription).to.be.a('string');
                expect(data.shortDescription).to.be("");
                expect(data.fullDescription).to.be.a('string');
                expect(data.fullDescription).to.be("");
                expect(data.variantDescription).to.be.a('string');
                expect(data.variantDescription).to.be("");
                expect(data.dimensions).to.be.a(Apicreativehubio.ValueTupleOfDecimalAndDecimalAndDecimalAndDecimal);
                      expect(data.dimensions.item1).to.be.a('number');
                  expect(data.dimensions.item1).to.be();
                  expect(data.dimensions.item2).to.be.a('number');
                  expect(data.dimensions.item2).to.be();
                  expect(data.dimensions.item3).to.be.a('number');
                  expect(data.dimensions.item3).to.be();
                  expect(data.dimensions.item4).to.be.a('number');
                  expect(data.dimensions.item4).to.be();

                      }
            }
            expect(data.descriptionHTML).to.be.a('string');
            expect(data.descriptionHTML).to.be("");
            expect(data.dateTakenString).to.be.a('string');
            expect(data.dateTakenString).to.be("");
            expect(data.thumbnailUrl).to.be.a('string');
            expect(data.thumbnailUrl).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('productsQueryV1', function() {
        it('should call productsQueryV1 successfully', function(done) {
          // TODO: uncomment, update parameter values for productsQueryV1 call and complete the assertions
          /*
          var opts = {};
          opts.request = new Apicreativehubio.CollectionRequest();
          opts.request.page = 0;
          opts.request.pageSize = 0;
          opts.request.filter = new Apicreativehubio.IFilterDescriptor();
          opts.request.sorts = [new Apicreativehubio.SortDescriptor()];
          opts.request.sorts[0].member = "";
          opts.request.sorts[0].sortDirection = new Apicreativehubio.SortDirection();

          instance.productsQueryV1(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Apicreativehubio.CollectionResultOfProduct);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Apicreativehubio.Product);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.fileName).to.be.a('string');
                expect(data.fileName).to.be("");
                expect(data.displayName).to.be.a('string');
                expect(data.displayName).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.storagePrefix).to.be.a('string');
                expect(data.storagePrefix).to.be("");
                expect(data.GUID).to.be.a('string');
                expect(data.GUID).to.be("");
                expect(data.HDPI).to.be.a('number');
                expect(data.HDPI).to.be(0.0);
                expect(data.VDPI).to.be.a('number');
                expect(data.VDPI).to.be(0.0);
                expect(data.width).to.be.a('number');
                expect(data.width).to.be(0);
                expect(data.height).to.be.a('number');
                expect(data.height).to.be(0);
                expect(data.dateTaken).to.be.a(Date);
                expect(data.dateTaken).to.be(new Date());
                expect(data.userFirstName).to.be.a('string');
                expect(data.userFirstName).to.be("");
                expect(data.userLastName).to.be.a('string');
                expect(data.userLastName).to.be("");
                expect(data.userDefaultArtistName).to.be.a('string');
                expect(data.userDefaultArtistName).to.be("");
                expect(data.artistName).to.be.a('string');
                expect(data.artistName).to.be("");
                expect(data.paper).to.be.a('string');
                expect(data.paper).to.be("");
                expect(data.printType).to.be.a('string');
                expect(data.printType).to.be("");
                expect(data.hasFramedOptions).to.be.a('boolean');
                expect(data.hasFramedOptions).to.be(false);
                {
                  let dataCtr = data.printOptions;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Apicreativehubio.PrintOption);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be(0);
                    expect(data.price).to.be.a('number');
                    expect(data.price).to.be();
                    expect(data.costPerItem).to.be.a('number');
                    expect(data.costPerItem).to.be();
                    expect(data.shortSideInches).to.be.a('number');
                    expect(data.shortSideInches).to.be();
                    expect(data.longSideInches).to.be.a('number');
                    expect(data.longSideInches).to.be();
                    expect(data.shortSideMM).to.be.a('number');
                    expect(data.shortSideMM).to.be();
                    expect(data.longSideMM).to.be.a('number');
                    expect(data.longSideMM).to.be();
                    expect(data.borderTopMM).to.be.a('number');
                    expect(data.borderTopMM).to.be();
                    expect(data.borderLeftMM).to.be.a('number');
                    expect(data.borderLeftMM).to.be();
                    expect(data.borderRightMM).to.be.a('number');
                    expect(data.borderRightMM).to.be();
                    expect(data.borderBottomMM).to.be.a('number');
                    expect(data.borderBottomMM).to.be();
                    expect(data.wMBorderTopMM).to.be.a('number');
                    expect(data.wMBorderTopMM).to.be();
                    expect(data.wMBorderLeftMM).to.be.a('number');
                    expect(data.wMBorderLeftMM).to.be();
                    expect(data.wMBorderRightMM).to.be.a('number');
                    expect(data.wMBorderRightMM).to.be();
                    expect(data.wMBorderBottomMM).to.be.a('number');
                    expect(data.wMBorderBottomMM).to.be();
                    expect(data.wMColour).to.be.a('string');
                    expect(data.wMColour).to.be("");
                    expect(data.isAvailable).to.be.a('boolean');
                    expect(data.isAvailable).to.be(false);
                    expect(data.sellAsEdition).to.be.a('boolean');
                    expect(data.sellAsEdition).to.be(false);
                    expect(data.editionsLimit).to.be.a('number');
                    expect(data.editionsLimit).to.be(0);
                    expect(data.lastUpdated).to.be.a(Date);
                    expect(data.lastUpdated).to.be(new Date());
                    expect(data.hasFrame).to.be.a('boolean');
                    expect(data.hasFrame).to.be(false);
                    expect(data.hasCanvas).to.be.a('boolean');
                    expect(data.hasCanvas).to.be(false);
                    expect(data.frameDescription).to.be.a('string');
                    expect(data.frameDescription).to.be("");
                    expect(data.frameWidthMM).to.be.a('number');
                    expect(data.frameWidthMM).to.be(0);
                    expect(data.widthMM).to.be.a('number');
                    expect(data.widthMM).to.be();
                    expect(data.heightMM).to.be.a('number');
                    expect(data.heightMM).to.be();
                    expect(data.editionsSold).to.be.a('number');
                    expect(data.editionsSold).to.be(0);
                    expect(data.currencyCode).to.be.a('string');
                    expect(data.currencyCode).to.be("");
                    expect(data.previewFileNameStandard).to.be.a('string');
                    expect(data.previewFileNameStandard).to.be("");
                    expect(data.previewFileNameCloseUp).to.be.a('string');
                    expect(data.previewFileNameCloseUp).to.be("");
                    expect(data.verticalBorderMM).to.be.a('number');
                    expect(data.verticalBorderMM).to.be();
                    expect(data.horizontalBorderMM).to.be.a('number');
                    expect(data.horizontalBorderMM).to.be();
                    expect(data.longBorderMM).to.be.a('number');
                    expect(data.longBorderMM).to.be();
                    expect(data.shortBorderMM).to.be.a('number');
                    expect(data.shortBorderMM).to.be();
                    expect(data.verticalWMBorderMM).to.be.a('number');
                    expect(data.verticalWMBorderMM).to.be();
                    expect(data.horizontalWMBorderMM).to.be.a('number');
                    expect(data.horizontalWMBorderMM).to.be();
                    expect(data.longMountMM).to.be.a('number');
                    expect(data.longMountMM).to.be();
                    expect(data.shortMountMM).to.be.a('number');
                    expect(data.shortMountMM).to.be();
                    expect(data.totalWidthMM).to.be.a('number');
                    expect(data.totalWidthMM).to.be();
                    expect(data.totalHeightMM).to.be.a('number');
                    expect(data.totalHeightMM).to.be();
                    expect(data.totalLongSideMM).to.be.a('number');
                    expect(data.totalLongSideMM).to.be();
                    expect(data.totalShortSideMM).to.be.a('number');
                    expect(data.totalShortSideMM).to.be();
                    expect(data.totalLongSideInches).to.be.a('number');
                    expect(data.totalLongSideInches).to.be();
                    expect(data.totalShortSideInches).to.be.a('number');
                    expect(data.totalShortSideInches).to.be();
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    expect(data.shortDescription).to.be.a('string');
                    expect(data.shortDescription).to.be("");
                    expect(data.fullDescription).to.be.a('string');
                    expect(data.fullDescription).to.be("");
                    expect(data.variantDescription).to.be.a('string');
                    expect(data.variantDescription).to.be("");
                    expect(data.dimensions).to.be.a(Apicreativehubio.ValueTupleOfDecimalAndDecimalAndDecimalAndDecimal);
                          expect(data.dimensions.item1).to.be.a('number');
                      expect(data.dimensions.item1).to.be();
                      expect(data.dimensions.item2).to.be.a('number');
                      expect(data.dimensions.item2).to.be();
                      expect(data.dimensions.item3).to.be.a('number');
                      expect(data.dimensions.item3).to.be();
                      expect(data.dimensions.item4).to.be.a('number');
                      expect(data.dimensions.item4).to.be();
    
                          }
                }
                expect(data.descriptionHTML).to.be.a('string');
                expect(data.descriptionHTML).to.be("");
                expect(data.dateTakenString).to.be.a('string');
                expect(data.dateTakenString).to.be("");
                expect(data.thumbnailUrl).to.be.a('string');
                expect(data.thumbnailUrl).to.be("");

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
