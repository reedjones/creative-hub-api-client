# Apicreativehubio.SkusApi

All URIs are relative to *https://api.sandbox.tps-test.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**skusGetV1**](SkusApi.md#skusGetV1) | **GET** /api/v1/skus/{sku} | Get an Order Item given a SKU


<a name="skusGetV1"></a>
# **skusGetV1**
> OrderItemRequest skusGetV1(sku)

Get an Order Item given a SKU

### Example
```javascript
var Apicreativehubio = require('apicreativehubio');

var apiInstance = new Apicreativehubio.SkusApi();

var sku = "sku_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.skusGetV1(sku, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**|  | 

### Return type

[**OrderItemRequest**](OrderItemRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

