# Seats
(*customerPortal.seats*)

## Overview

### Available Operations

* [listSeats](#listseats) - List Seats
* [assignSeat](#assignseat) - Assign Seat
* [revokeSeat](#revokeseat) - Revoke Seat
* [resendInvitation](#resendinvitation) - Resend Invitation
* [listClaimedSubscriptions](#listclaimedsubscriptions) - List Claimed Subscriptions

## listSeats

**Scopes**: `customer_portal:read` `customer_portal:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:seats:list_seats" method="get" path="/v1/customer-portal/seats" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.seats.listSeats({
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    subscriptionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { customerPortalSeatsListSeats } from "@polar-sh/sdk/funcs/customerPortalSeatsListSeats.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore();

async function run() {
  const res = await customerPortalSeatsListSeats(polar, {
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    subscriptionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalSeatsListSeats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomerPortalSeatsListSeatsRequest](../../models/operations/customerportalseatslistseatsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalSeatsListSeatsSecurity](../../models/operations/customerportalseatslistseatssecurity.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeatsList](../../models/components/seatslist.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## assignSeat

**Scopes**: `customer_portal:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:seats:assign_seat" method="post" path="/v1/customer-portal/seats" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.seats.assignSeat({
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { customerPortalSeatsAssignSeat } from "@polar-sh/sdk/funcs/customerPortalSeatsAssignSeat.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore();

async function run() {
  const res = await customerPortalSeatsAssignSeat(polar, {
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalSeatsAssignSeat failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.SeatAssign](../../models/components/seatassign.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalSeatsAssignSeatSecurity](../../models/operations/customerportalseatsassignseatsecurity.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerSeat](../../models/components/customerseat.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## revokeSeat

**Scopes**: `customer_portal:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:seats:revoke_seat" method="delete" path="/v1/customer-portal/seats/{seat_id}" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.seats.revokeSeat({
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    seatId: "4b3d74b3-01ff-4aac-bd03-320535cd5ce4",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { customerPortalSeatsRevokeSeat } from "@polar-sh/sdk/funcs/customerPortalSeatsRevokeSeat.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore();

async function run() {
  const res = await customerPortalSeatsRevokeSeat(polar, {
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    seatId: "4b3d74b3-01ff-4aac-bd03-320535cd5ce4",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalSeatsRevokeSeat failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomerPortalSeatsRevokeSeatRequest](../../models/operations/customerportalseatsrevokeseatrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalSeatsRevokeSeatSecurity](../../models/operations/customerportalseatsrevokeseatsecurity.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerSeat](../../models/components/customerseat.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## resendInvitation

**Scopes**: `customer_portal:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:seats:resend_invitation" method="post" path="/v1/customer-portal/seats/{seat_id}/resend" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.seats.resendInvitation({
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    seatId: "e3817437-8d53-4578-88d2-1dc256825965",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PolarCore } from "@polar-sh/sdk/core.js";
import { customerPortalSeatsResendInvitation } from "@polar-sh/sdk/funcs/customerPortalSeatsResendInvitation.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore();

async function run() {
  const res = await customerPortalSeatsResendInvitation(polar, {
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  }, {
    seatId: "e3817437-8d53-4578-88d2-1dc256825965",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalSeatsResendInvitation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomerPortalSeatsResendInvitationRequest](../../models/operations/customerportalseatsresendinvitationrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalSeatsResendInvitationSecurity](../../models/operations/customerportalseatsresendinvitationsecurity.md)                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerSeat](../../models/components/customerseat.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## listClaimedSubscriptions

List all subscriptions where the authenticated customer has claimed a seat.

**Scopes**: `customer_portal:read` `customer_portal:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:seats:list_claimed_subscriptions" method="get" path="/v1/customer-portal/seats/subscriptions" -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.customerPortal.seats.listClaimedSubscriptions({
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
import { customerPortalSeatsListClaimedSubscriptions } from "@polar-sh/sdk/funcs/customerPortalSeatsListClaimedSubscriptions.js";

// Use `PolarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const polar = new PolarCore();

async function run() {
  const res = await customerPortalSeatsListClaimedSubscriptions(polar, {
    customerSession: process.env["POLAR_CUSTOMER_SESSION"] ?? "",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalSeatsListClaimedSubscriptions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.CustomerPortalSeatsListClaimedSubscriptionsSecurity](../../models/operations/customerportalseatslistclaimedsubscriptionssecurity.md)                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerSubscription[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |