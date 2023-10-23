# Apicreativehubio.OrdersApi

All URIs are relative to *https://api.sandbox.tps-test.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ordersConfirmV1**](OrdersApi.md#ordersConfirmV1) | **POST** /api/v1/orders/confirmed | Create a confirmed order
[**ordersDeleteV1**](OrdersApi.md#ordersDeleteV1) | **DELETE** /api/v1/orders/{id} | Cancel an embryonic order
[**ordersEmbryonicV1**](OrdersApi.md#ordersEmbryonicV1) | **POST** /api/v1/orders/embryonic | Create an embryonic order
[**ordersGetV1**](OrdersApi.md#ordersGetV1) | **GET** /api/v1/orders/{id} | Get an order given an id
[**ordersQueryV1**](OrdersApi.md#ordersQueryV1) | **POST** /api/v1/orders/query | Queries all your orders
[**ordersUpdateStateV1**](OrdersApi.md#ordersUpdateStateV1) | **PUT** /api/v1/orders/state | Only for test deployments, not for production use - update an order's state


<a name="ordersConfirmV1"></a>
# **ordersConfirmV1**
> OrderConfirmedResponse ordersConfirmV1(opts)

Create a confirmed order

### Example
```javascript
var Apicreativehubio = require('apicreativehubio');

var apiInstance = new Apicreativehubio.OrdersApi();

var opts = { 
  'model': new Apicreativehubio.OrderConfirmedRequest() // OrderConfirmedRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersConfirmV1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**OrderConfirmedRequest**](OrderConfirmedRequest.md)|  | [optional] 

### Return type

[**OrderConfirmedResponse**](OrderConfirmedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ordersDeleteV1"></a>
# **ordersDeleteV1**
> ordersDeleteV1(id)

Cancel an embryonic order

### Example
```javascript
var Apicreativehubio = require('apicreativehubio');

var apiInstance = new Apicreativehubio.OrdersApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.ordersDeleteV1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ordersEmbryonicV1"></a>
# **ordersEmbryonicV1**
> OrderEmbryonicResponse ordersEmbryonicV1(opts)

Create an embryonic order

### Example
```javascript
var Apicreativehubio = require('apicreativehubio');

var apiInstance = new Apicreativehubio.OrdersApi();

var opts = { 
  'model': new Apicreativehubio.OrderEmbryonicRequest() // OrderEmbryonicRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersEmbryonicV1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**OrderEmbryonicRequest**](OrderEmbryonicRequest.md)|  | [optional] 

### Return type

[**OrderEmbryonicResponse**](OrderEmbryonicResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ordersGetV1"></a>
# **ordersGetV1**
> OrderConfirmedResponse ordersGetV1(id)

Get an order given an id

### Example
```javascript
var Apicreativehubio = require('apicreativehubio');

var apiInstance = new Apicreativehubio.OrdersApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersGetV1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**OrderConfirmedResponse**](OrderConfirmedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ordersQueryV1"></a>
# **ordersQueryV1**
> CollectionResultOfOrderConfirmedResponse ordersQueryV1(opts)

Queries all your orders

### Example
```javascript
var Apicreativehubio = require('apicreativehubio');

var apiInstance = new Apicreativehubio.OrdersApi();

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
apiInstance.ordersQueryV1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CollectionRequest**](CollectionRequest.md)|  | [optional] 

### Return type

[**CollectionResultOfOrderConfirmedResponse**](CollectionResultOfOrderConfirmedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ordersUpdateStateV1"></a>
# **ordersUpdateStateV1**
> ordersUpdateStateV1(opts)

Only for test deployments, not for production use - update an order's state

### Example
```javascript
var Apicreativehubio = require('apicreativehubio');

var apiInstance = new Apicreativehubio.OrdersApi();

var opts = { 
  'model': new Apicreativehubio.OrderStateRequest() // OrderStateRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.ordersUpdateStateV1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**OrderStateRequest**](OrderStateRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

