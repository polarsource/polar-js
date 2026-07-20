# Customers.Members

## Overview

### Available Operations

* [create](#create) - Create Member
* [createExternal](#createexternal) - Create Member by Customer External ID
* [get](#get) - Get Member
* [delete](#delete) - Delete Member
* [update](#update) - Update Member
* [getExternal](#getexternal) - Get Member by External ID
* [deleteExternal](#deleteexternal) - Delete Member by External ID
* [updateExternal](#updateexternal) - Update Member by External ID

## create

Create a new member for a customer.

Only B2B customers with the member management feature enabled can add members.
The authenticated user or organization must have access to the customer's organization.

**Scopes**: `members:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customers:members:create" method="post" path="/v1/customers/{id}/members" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.customers.members.create({
    id: "<value>",
    memberCreateFromCustomer: {
      email: "member@example.com",
      name: "Jane Doe",
      externalId: "usr_1337",
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
import { customersMembersCreate } from "@polar-sh/sdk/funcs/customersMembersCreate.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await customersMembersCreate(polar, {
    id: "<value>",
    memberCreateFromCustomer: {
      email: "member@example.com",
      name: "Jane Doe",
      externalId: "usr_1337",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersMembersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomersMembersCreateRequest](../../models/operations/customersmemberscreaterequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Member](../../models/components/member.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotPermitted        | 403                        | application/json           |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## createExternal

Create a new member for a customer identified by its external ID.

**Scopes**: `members:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customers:members:create_external" method="post" path="/v1/customers/external/{external_id}/members" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.customers.members.createExternal({
    externalId: "<id>",
    memberCreateFromCustomer: {
      email: "member@example.com",
      name: "Jane Doe",
      externalId: "usr_1337",
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
import { customersMembersCreateExternal } from "@polar-sh/sdk/funcs/customersMembersCreateExternal.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await customersMembersCreateExternal(polar, {
    externalId: "<id>",
    memberCreateFromCustomer: {
      email: "member@example.com",
      name: "Jane Doe",
      externalId: "usr_1337",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersMembersCreateExternal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomersMembersCreateExternalRequest](../../models/operations/customersmemberscreateexternalrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Member](../../models/components/member.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.NotPermitted                | 403                                | application/json                   |
| errors.ResourceNotFound            | 404                                | application/json                   |
| errors.AmbiguousExternalCustomerID | 409                                | application/json                   |
| errors.HTTPValidationError         | 422                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## get

Get a member of a customer by its ID.

**Scopes**: `members:read` `members:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customers:members:get" method="get" path="/v1/customers/{id}/members/{member_id}" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.customers.members.get({
    id: "<value>",
    memberId: "a794a9c8-dc43-40b4-b2f5-ed16145e28ac",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { customersMembersGet } from "@polar-sh/sdk/funcs/customersMembersGet.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await customersMembersGet(polar, {
    id: "<value>",
    memberId: "a794a9c8-dc43-40b4-b2f5-ed16145e28ac",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersMembersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomersMembersGetRequest](../../models/operations/customersmembersgetrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Member](../../models/components/member.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## delete

Delete a member of a customer.

**Scopes**: `members:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customers:members:delete" method="delete" path="/v1/customers/{id}/members/{member_id}" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  await polar.customers.members.delete({
    id: "<value>",
    memberId: "a6d6f519-f76e-49a0-9868-b346c98100a6",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { customersMembersDelete } from "@polar-sh/sdk/funcs/customersMembersDelete.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await customersMembersDelete(polar, {
    id: "<value>",
    memberId: "a6d6f519-f76e-49a0-9868-b346c98100a6",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("customersMembersDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomersMembersDeleteRequest](../../models/operations/customersmembersdeleterequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## update

Update a member of a customer.

Only name, email and role can be updated.

**Scopes**: `members:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customers:members:update" method="patch" path="/v1/customers/{id}/members/{member_id}" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.customers.members.update({
    id: "<value>",
    memberId: "f48ea05d-6a60-4bb1-b3d9-4b3cd7194f3a",
    memberUpdate: {
      name: "Jane Doe",
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
import { customersMembersUpdate } from "@polar-sh/sdk/funcs/customersMembersUpdate.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await customersMembersUpdate(polar, {
    id: "<value>",
    memberId: "f48ea05d-6a60-4bb1-b3d9-4b3cd7194f3a",
    memberUpdate: {
      name: "Jane Doe",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersMembersUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomersMembersUpdateRequest](../../models/operations/customersmembersupdaterequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Member](../../models/components/member.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getExternal

Get a member by external ID for a customer identified by its external ID.

**Scopes**: `members:read` `members:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customers:members:get_external" method="get" path="/v1/customers/external/{external_id}/members/{member_external_id}" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.customers.members.getExternal({
    externalId: "<id>",
    memberExternalId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { customersMembersGetExternal } from "@polar-sh/sdk/funcs/customersMembersGetExternal.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await customersMembersGetExternal(polar, {
    externalId: "<id>",
    memberExternalId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersMembersGetExternal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomersMembersGetExternalRequest](../../models/operations/customersmembersgetexternalrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Member](../../models/components/member.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ResourceNotFound            | 404                                | application/json                   |
| errors.AmbiguousExternalCustomerID | 409                                | application/json                   |
| errors.HTTPValidationError         | 422                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## deleteExternal

Delete a member by external ID for a customer identified by its external ID.

**Scopes**: `members:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customers:members:delete_external" method="delete" path="/v1/customers/external/{external_id}/members/{member_external_id}" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  await polar.customers.members.deleteExternal({
    externalId: "<id>",
    memberExternalId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { customersMembersDeleteExternal } from "@polar-sh/sdk/funcs/customersMembersDeleteExternal.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await customersMembersDeleteExternal(polar, {
    externalId: "<id>",
    memberExternalId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("customersMembersDeleteExternal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomersMembersDeleteExternalRequest](../../models/operations/customersmembersdeleteexternalrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ResourceNotFound            | 404                                | application/json                   |
| errors.AmbiguousExternalCustomerID | 409                                | application/json                   |
| errors.HTTPValidationError         | 422                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## updateExternal

Update a member by external ID for a customer identified by its external ID.

**Scopes**: `members:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customers:members:update_external" method="patch" path="/v1/customers/external/{external_id}/members/{member_external_id}" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.customers.members.updateExternal({
    externalId: "<id>",
    memberExternalId: "<id>",
    memberUpdate: {
      name: "Jane Doe",
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
import { customersMembersUpdateExternal } from "@polar-sh/sdk/funcs/customersMembersUpdateExternal.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await customersMembersUpdateExternal(polar, {
    externalId: "<id>",
    memberExternalId: "<id>",
    memberUpdate: {
      name: "Jane Doe",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersMembersUpdateExternal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomersMembersUpdateExternalRequest](../../models/operations/customersmembersupdateexternalrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Member](../../models/components/member.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ResourceNotFound            | 404                                | application/json                   |
| errors.AmbiguousExternalCustomerID | 409                                | application/json                   |
| errors.HTTPValidationError         | 422                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |