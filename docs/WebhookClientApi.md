# Apicreativehubio.WebhookClientApi

All URIs are relative to *https://api.sandbox.tps-test.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhookClientWebhookV1**](WebhookClientApi.md#webhookClientWebhookV1) | **POST** /client/v1/webhook | example of webhook reciever endpoint


<a name="webhookClientWebhookV1"></a>
# **webhookClientWebhookV1**
> File webhookClientWebhookV1(opts)

example of webhook reciever endpoint

### Example
```javascript
var Apicreativehubio = require('apicreativehubio');

var apiInstance = new Apicreativehubio.WebhookClientApi();

var opts = { 
  'payload': new Apicreativehubio.WebhookBase() // WebhookBase | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhookClientWebhookV1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**WebhookBase**](WebhookBase.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

