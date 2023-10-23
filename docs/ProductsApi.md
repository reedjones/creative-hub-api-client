# Apicreativehubio.ProductsApi

All URIs are relative to *https://api.sandbox.tps-test.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productsGetV1**](ProductsApi.md#productsGetV1) | **GET** /api/v1/products/{id} | Get a product given an id
[**productsQueryV1**](ProductsApi.md#productsQueryV1) | **POST** /api/v1/products/query | Queries all your products


<a name="productsGetV1"></a>
# **productsGetV1**
> Product productsGetV1(id)

Get a product given an id

### Example
```javascript
var Apicreativehubio = require('apicreativehubio');

var apiInstance = new Apicreativehubio.ProductsApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productsGetV1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productsQueryV1"></a>
# **productsQueryV1**
> CollectionResultOfProduct productsQueryV1(opts)

Queries all your products

### Example
```javascript
var Apicreativehubio = require('apicreativehubio');

var apiInstance = new Apicreativehubio.ProductsApi();

var opts = { 
  'request': new Apicreativehubio.CollectionRequest() // CollectionRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productsQueryV1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CollectionRequest**](CollectionRequest.md)|  | [optional] 

### Return type

[**CollectionResultOfProduct**](CollectionResultOfProduct.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

