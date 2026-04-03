# BalanceOrderEvent

An event created by Polar when an order is paid.

## Example Usage

```typescript
import { BalanceOrderEvent } from "@polar-sh/sdk/models/components/balanceorderevent.js";

let value: BalanceOrderEvent = {
  id: "<value>",
  timestamp: new Date("2024-08-24T02:29:28.468Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2026-07-03T08:28:47.201Z"),
    modifiedAt: new Date("2026-03-16T19:59:32.736Z"),
    metadata: {
      "key": 233.49,
    },
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-04-04T00:08:29.575Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: null,
  label: "<value>",
  source: "system",
  name: "balance.order",
  metadata: {
    transactionId: "<id>",
    orderId: "<id>",
    amount: 825373,
    currency: "UAE Dirham",
    presentmentAmount: 535304,
    presentmentCurrency: "<value>",
    taxAmount: 571305,
    fee: 460080,
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the object.                                                                                                          |                                                                                                                                |
| `timestamp`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_check_mark:                                                                                                             | The timestamp of the event.                                                                                                    |                                                                                                                                |
| `organizationId`                                                                                                               | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the organization owning the event.                                                                                   | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                           |
| `customerId`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | ID of the customer in your Polar organization associated with the event.                                                       |                                                                                                                                |
| `customer`                                                                                                                     | *components.Customer*                                                                                                          | :heavy_check_mark:                                                                                                             | The customer associated with the event.                                                                                        |                                                                                                                                |
| `externalCustomerId`                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | ID of the customer in your system associated with the event.                                                                   |                                                                                                                                |
| `memberId`                                                                                                                     | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | ID of the member within the customer's organization who performed the action inside B2B.                                       |                                                                                                                                |
| `externalMemberId`                                                                                                             | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | ID of the member in your system within the customer's organization who performed the action inside B2B.                        |                                                                                                                                |
| `childCount`                                                                                                                   | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Number of direct child events linked to this event.                                                                            |                                                                                                                                |
| `parentId`                                                                                                                     | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The ID of the parent event.                                                                                                    |                                                                                                                                |
| `label`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Human readable label of the event type.                                                                                        |                                                                                                                                |
| `source`                                                                                                                       | *"system"*                                                                                                                     | :heavy_check_mark:                                                                                                             | The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. |                                                                                                                                |
| `name`                                                                                                                         | *"balance.order"*                                                                                                              | :heavy_check_mark:                                                                                                             | The name of the event.                                                                                                         |                                                                                                                                |
| `metadata`                                                                                                                     | [components.BalanceOrderMetadata](../../models/components/balanceordermetadata.md)                                             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |