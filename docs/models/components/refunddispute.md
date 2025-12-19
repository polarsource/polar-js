# RefundDispute

Dispute associated with a refund,
in case we prevented a dispute by issuing a refund.

## Example Usage

```typescript
import { RefundDispute } from "@polar-sh/sdk/models/components/refunddispute.js";

let value: RefundDispute = {
  createdAt: new Date("2025-09-28T07:01:00.127Z"),
  modifiedAt: new Date("2025-04-04T00:24:26.451Z"),
  id: "<value>",
  status: "under_review",
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