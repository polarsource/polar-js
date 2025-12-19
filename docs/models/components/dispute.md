# Dispute

Schema representing a dispute.

A dispute is a challenge raised by a customer or their bank regarding a payment.

## Example Usage

```typescript
import { Dispute } from "@polar-sh/sdk/models/components/dispute.js";

let value: Dispute = {
  createdAt: new Date("2023-03-30T12:33:21.882Z"),
  modifiedAt: null,
  id: "<value>",
  status: "needs_response",
  resolved: false,
  closed: false,
  amount: 1000,
  taxAmount: 200,
  currency: "usd",
  orderId: "57107b74-8400-4d80-a2fc-54c2b4239cb3",
  paymentId: "42b94870-36b9-4573-96b6-b90b1c99a353",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |                                                                                               |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |                                                                                               |
| `status`                                                                                      | [components.DisputeStatus](../../models/components/disputestatus.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `resolved`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the dispute has been resolved (won or lost).                                          | false                                                                                         |
| `closed`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the dispute is closed (prevented, won, or lost).                                      | false                                                                                         |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | Amount in cents disputed.                                                                     | 1000                                                                                          |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | Tax amount in cents disputed.                                                                 | 200                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Currency code of the dispute.                                                                 | usd                                                                                           |
| `orderId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the order associated with the dispute.                                              | 57107b74-8400-4d80-a2fc-54c2b4239cb3                                                          |
| `paymentId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the payment associated with the dispute.                                            | 42b94870-36b9-4573-96b6-b90b1c99a353                                                          |