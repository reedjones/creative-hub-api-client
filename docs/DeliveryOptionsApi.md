# Apicreativehubio.DeliveryOptionsApi

All URIs are relative to *https://api.sandbox.tps-test.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deliveryOptionsGetV1**](DeliveryOptionsApi.md#deliveryOptionsGetV1) | **GET** /api/v1/deliveryoptions/{id} | Get a delivery option given an id
[**deliveryOptionsQueryV1**](DeliveryOptionsApi.md#deliveryOptionsQueryV1) | **POST** /api/v1/deliveryoptions/query | Queries all delivery options for all countries


<a name="deliveryOptionsGetV1"></a>
# **deliveryOptionsGetV1**
> DeliveryOption deliveryOptionsGetV1(id)

Get a delivery option given an id

### Example
```javascript
var Apicreativehubio = require('apicreativehubio');

var apiInstance = new Apicreativehubio.DeliveryOptionsApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deliveryOptionsGetV1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**DeliveryOption**](DeliveryOption.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deliveryOptionsQueryV1"></a>
# **deliveryOptionsQueryV1**
> CollectionResultOfDeliveryOption deliveryOptionsQueryV1(opts)

Queries all delivery options for all countries

### Example
```javascript
var Apicreativehubio = require('apicreativehubio');

var apiInstance = new Apicreativehubio.DeliveryOptionsApi();

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
apiInstance.deliveryOptionsQueryV1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CollectionRequest**](CollectionRequest.md)|  | [optional] 

### Return type

[**CollectionResultOfDeliveryOption**](CollectionResultOfDeliveryOption.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

