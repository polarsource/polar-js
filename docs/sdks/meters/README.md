# Meters
(*meters*)

## Overview

### Available Operations

* [list](#list) - List Meters
* [create](#create) - Create Meter
* [get](#get) - Get Meter
* [update](#update) - Update Meter
* [quantities](#quantities) - Get Meter Quantities

## list

List meters.

**Scopes**: `meters:read` `meters:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="meters:list" method="get" path="/v1/meters/" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.meters.list({
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  });

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
import { metersList } from "@polar-sh/sdk/funcs/metersList.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await metersList(polar, {
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("metersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MetersListRequest](../../models/operations/meterslistrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.MetersListResponse](../../models/operations/meterslistresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## create

Create a meter.

**Scopes**: `meters:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="meters:create" method="post" path="/v1/meters/" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.meters.create({
    name: "<value>",
    filter: {
      conjunction: "or",
      clauses: [
        {
          property: "<value>",
          operator: "ne",
          value: "<value>",
        },
      ],
    },
    aggregation: {
      func: "max",
      property: "<value>",
    },
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { metersCreate } from "@polar-sh/sdk/funcs/metersCreate.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await metersCreate(polar, {
    name: "<value>",
    filter: {
      conjunction: "or",
      clauses: [
        {
          property: "<value>",
          operator: "ne",
          value: "<value>",
        },
      ],
    },
    aggregation: {
      func: "max",
      property: "<value>",
    },
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.MeterCreate](../../models/components/metercreate.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Meter](../../models/components/meter.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## get

Get a meter by ID.

**Scopes**: `meters:read` `meters:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="meters:get" method="get" path="/v1/meters/{id}" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.meters.get({
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
import { metersGet } from "@polar-sh/sdk/funcs/metersGet.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await metersGet(polar, {
    id: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MetersGetRequest](../../models/operations/metersgetrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Meter](../../models/components/meter.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## update

Update a meter.

**Scopes**: `meters:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="meters:update" method="patch" path="/v1/meters/{id}" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.meters.update({
    id: "<value>",
    meterUpdate: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { metersUpdate } from "@polar-sh/sdk/funcs/metersUpdate.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await metersUpdate(polar, {
    id: "<value>",
    meterUpdate: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metersUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MetersUpdateRequest](../../models/operations/metersupdaterequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Meter](../../models/components/meter.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## quantities

Get quantities of a meter over a time period.

**Scopes**: `meters:read` `meters:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="meters:quantities" method="get" path="/v1/meters/{id}/quantities" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.meters.quantities({
    id: "<value>",
    startTimestamp: new Date("2025-11-25T04:37:16.823Z"),
    endTimestamp: new Date("2025-11-26T17:06:00.727Z"),
    interval: "day",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { metersQuantities } from "@polar-sh/sdk/funcs/metersQuantities.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await metersQuantities(polar, {
    id: "<value>",
    startTimestamp: new Date("2025-11-25T04:37:16.823Z"),
    endTimestamp: new Date("2025-11-26T17:06:00.727Z"),
    interval: "day",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metersQuantities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MetersQuantitiesRequest](../../models/operations/metersquantitiesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MeterQuantities](../../models/components/meterquantities.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |