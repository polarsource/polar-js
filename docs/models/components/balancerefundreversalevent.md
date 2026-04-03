# BalanceRefundReversalEvent

An event created by Polar when a refund is reverted.

## Example Usage

```typescript
import { BalanceRefundReversalEvent } from "@polar-sh/sdk/models/components/balancerefundreversalevent.js";

let value: BalanceRefundReversalEvent = {
  id: "<value>",
  timestamp: new Date("2025-01-16T23:12:47.762Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: null,
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-05-11T13:54:25.489Z"),
    modifiedAt: new Date("2025-08-26T20:00:45.810Z"),
    metadata: {
      "key": 3199.43,
    },
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-11-06T13:28:49.215Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: null,
  label: "<value>",
  source: "system",
  name: "balance.refund_reversal",
  metadata: {
    transactionId: "<id>",
    refundId: "<id>",
    amount: 231482,
    currency: "Denar",
    presentmentAmount: 403761,
    presentmentCurrency: "<value>",
    taxAmount: 510130,
    fee: 330280,
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
| `name`                                                                                                                         | *"balance.refund_reversal"*                                                                                                    | :heavy_check_mark:                                                                                                             | The name of the event.                                                                                                         |                                                                                                                                |
| `metadata`                                                                                                                     | [components.BalanceRefundMetadata](../../models/components/balancerefundmetadata.md)                                           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |