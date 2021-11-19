# TempApi.MockupApi

All URIs are relative to *http://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createmockup**](MockupApi.md#createmockup) | **POST** /mockup | Creates the data
[**deletemockup**](MockupApi.md#deletemockup) | **DELETE** /mockup/{mockupId} | Delete the element
[**getAllmockup**](MockupApi.md#getAllmockup) | **GET** /mockup/getAll | Get all the data
[**getmockup**](MockupApi.md#getmockup) | **GET** /mockup/{mockupId} | Get the element
[**updatemockup**](MockupApi.md#updatemockup) | **PUT** /mockup/{mockupId} | Updates the element



## createmockup

> Mockup createmockup(mockup)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MockupApi();
let mockup = new TempApi.Mockup(); // Mockup | data to be created
apiInstance.createmockup(mockup, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mockup** | [**Mockup**](Mockup.md)| data to be created | 

### Return type

[**Mockup**](Mockup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletemockup

> deletemockup(mockupId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MockupApi();
let mockupId = "mockupId_example"; // String | the Id parameter
apiInstance.deletemockup(mockupId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mockupId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllmockup

> [Mockup] getAllmockup()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MockupApi();
apiInstance.getAllmockup((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Mockup]**](Mockup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getmockup

> Mockup getmockup(mockupId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MockupApi();
let mockupId = "mockupId_example"; // String | the Id parameter
apiInstance.getmockup(mockupId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mockupId** | **String**| the Id parameter | 

### Return type

[**Mockup**](Mockup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatemockup

> Mockup updatemockup(mockupId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MockupApi();
let mockupId = "mockupId_example"; // String | the Id parameter
let opts = {
  'mockup': new TempApi.Mockup() // Mockup | data to be updated
};
apiInstance.updatemockup(mockupId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mockupId** | **String**| the Id parameter | 
 **mockup** | [**Mockup**](Mockup.md)| data to be updated | [optional] 

### Return type

[**Mockup**](Mockup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

