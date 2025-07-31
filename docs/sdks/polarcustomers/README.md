# PolarCustomers
(*customerPortal.customers*)

## Overview

### Available Operations

* [get](#get) - Get Customer
* [update](#update) - Update Customer
* [listPaymentMethods](#listpaymentmethods) - List Customer Payment Methods
* [addPaymentMethod](#addpaymentmethod) - Add Customer Payment Method
* [deletePaymentMethod](#deletepaymentmethod) - Delete Customer Payment Method

## get

Get authenticated customer.

**Scopes**: `customer_portal:read` `customer_portal:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:customers:get" method="get" path="/v1/customer-portal/customers/me" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.customers.get({
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { customerPortalCustomersGet } from "@polar-sh/sdk/funcs/customerPortalCustomersGet.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore();

async function run() {
  const res = await customerPortalCustomersGet(polar, {
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalCustomersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.CustomerPortalCustomersGetSecurity](../../models/operations/customerportalcustomersgetsecurity.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## update

Update authenticated customer.

**Scopes**: `customer_portal:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:customers:update" method="patch" path="/v1/customer-portal/customers/me" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.customers.update({
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    billingAddress: {
      country: "US",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { customerPortalCustomersUpdate } from "@polar-sh/sdk/funcs/customerPortalCustomersUpdate.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore();

async function run() {
  const res = await customerPortalCustomersUpdate(polar, {
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    billingAddress: {
      country: "US",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalCustomersUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CustomerPortalCustomerUpdate](../../models/components/customerportalcustomerupdate.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalCustomersUpdateSecurity](../../models/operations/customerportalcustomersupdatesecurity.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## listPaymentMethods

Get saved payment methods of the authenticated customer.

**Scopes**: `customer_portal:read` `customer_portal:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:customers:list_payment_methods" method="get" path="/v1/customer-portal/customers/me/payment-methods" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.customers.listPaymentMethods({
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { customerPortalCustomersListPaymentMethods } from "@polar-sh/sdk/funcs/customerPortalCustomersListPaymentMethods.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore();

async function run() {
  const res = await customerPortalCustomersListPaymentMethods(polar, {
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("customerPortalCustomersListPaymentMethods failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomerPortalCustomersListPaymentMethodsRequest](../../models/operations/customerportalcustomerslistpaymentmethodsrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalCustomersListPaymentMethodsSecurity](../../models/operations/customerportalcustomerslistpaymentmethodssecurity.md)                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CustomerPortalCustomersListPaymentMethodsResponse](../../models/operations/customerportalcustomerslistpaymentmethodsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## addPaymentMethod

Add a payment method to the authenticated customer.

**Scopes**: `customer_portal:read` `customer_portal:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:customers:add_payment_method" method="post" path="/v1/customer-portal/customers/me/payment-methods" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.customers.addPaymentMethod({
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    confirmationTokenId: "<id>",
    setDefault: false,
    returnUrl: "https://yearly-custom.net/",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { customerPortalCustomersAddPaymentMethod } from "@polar-sh/sdk/funcs/customerPortalCustomersAddPaymentMethod.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore();

async function run() {
  const res = await customerPortalCustomersAddPaymentMethod(polar, {
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    confirmationTokenId: "<id>",
    setDefault: false,
    returnUrl: "https://yearly-custom.net/",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalCustomersAddPaymentMethod failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CustomerPaymentMethodCreate](../../models/components/customerpaymentmethodcreate.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalCustomersAddPaymentMethodSecurity](../../models/operations/customerportalcustomersaddpaymentmethodsecurity.md)                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerPaymentMethod](../../models/components/customerpaymentmethod.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## deletePaymentMethod

Delete a payment method from the authenticated customer.

**Scopes**: `customer_portal:read` `customer_portal:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:customers:delete_payment_method" method="delete" path="/v1/customer-portal/customers/me/payment-methods/{id}" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  await polar.customerPortal.customers.deletePaymentMethod({
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { customerPortalCustomersDeletePaymentMethod } from "@polar-sh/sdk/funcs/customerPortalCustomersDeletePaymentMethod.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore();

async function run() {
  const res = await customerPortalCustomersDeletePaymentMethod(polar, {
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("customerPortalCustomersDeletePaymentMethod failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomerPortalCustomersDeletePaymentMethodRequest](../../models/operations/customerportalcustomersdeletepaymentmethodrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalCustomersDeletePaymentMethodSecurity](../../models/operations/customerportalcustomersdeletepaymentmethodsecurity.md)                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |