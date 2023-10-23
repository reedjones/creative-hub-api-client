# Apicreativehubio.CountriesApi

All URIs are relative to *https://api.sandbox.tps-test.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countriesGetV1**](CountriesApi.md#countriesGetV1) | **GET** /api/v1/countries/{id} | Get a country given an id
[**countriesQueryV1**](CountriesApi.md#countriesQueryV1) | **POST** /api/v1/countries/query | Queries all the countries we deliver to


<a name="countriesGetV1"></a>
# **countriesGetV1**
> Country countriesGetV1(id)

Get a country given an id

### Example
```javascript
var Apicreativehubio = require('apicreativehubio');

var apiInstance = new Apicreativehubio.CountriesApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.countriesGetV1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Country**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="countriesQueryV1"></a>
# **countriesQueryV1**
> CollectionResultOfCountry countriesQueryV1(opts)

Queries all the countries we deliver to

### Example
```javascript
var Apicreativehubio = require('apicreativehubio');

var apiInstance = new Apicreativehubio.CountriesApi();

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
apiInstance.countriesQueryV1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CollectionRequest**](CollectionRequest.md)|  | [optional] 

### Return type

[**CollectionResultOfCountry**](CollectionResultOfCountry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

