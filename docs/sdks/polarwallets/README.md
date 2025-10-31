# PolarWallets
(*customerPortal.wallets*)

## Overview

### Available Operations

* [list](#list) - List Wallets
* [get](#get) - Get Wallet

## list

List wallets of the authenticated customer.

**Scopes**: `customer_portal:read` `customer_portal:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:wallets:list" method="get" path="/v1/customer-portal/wallets/" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.wallets.list({
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
import { customerPortalWalletsList } from "@polar-sh/sdk/funcs/customerPortalWalletsList.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore();

async function run() {
  const res = await customerPortalWalletsList(polar, {
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("customerPortalWalletsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomerPortalWalletsListRequest](../../models/operations/customerportalwalletslistrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalWalletsListSecurity](../../models/operations/customerportalwalletslistsecurity.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CustomerPortalWalletsListResponse](../../models/operations/customerportalwalletslistresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## get

Get a wallet by ID for the authenticated customer.

**Scopes**: `customer_portal:read` `customer_portal:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:wallets:get" method="get" path="/v1/customer-portal/wallets/{id}" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.wallets.get({
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    id: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { customerPortalWalletsGet } from "@polar-sh/sdk/funcs/customerPortalWalletsGet.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore();

async function run() {
  const res = await customerPortalWalletsGet(polar, {
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    id: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalWalletsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomerPortalWalletsGetRequest](../../models/operations/customerportalwalletsgetrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalWalletsGetSecurity](../../models/operations/customerportalwalletsgetsecurity.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerWallet](../../models/components/customerwallet.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |