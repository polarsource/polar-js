# Refund

## Example Usage

```typescript
import { Refund } from "@polar-sh/sdk/models/components/refund.js";

let value: Refund = {
  createdAt: new Date("2025-12-04T20:21:23.175Z"),
  modifiedAt: new Date("2023-10-13T16:58:34.242Z"),
  id: "<value>",
  metadata: {},
  status: "pending",
  reason: "dispute_prevention",
  amount: 300741,
  taxAmount: 880681,
  currency: "Comoro Franc",
  organizationId: "<value>",
  orderId: "<value>",
  subscriptionId: "<value>",
  customerId: "<value>",
  revokeBenefits: false,
  dispute: {
    createdAt: new Date("2025-01-29T09:21:00.593Z"),
    modifiedAt: new Date("2023-12-04T04:55:20.270Z"),
    id: "<value>",
    status: "prevented",
    resolved: false,
    closed: false,
    amount: 1000,
    taxAmount: 200,
    currency: "usd",
    orderId: "57107b74-8400-4d80-a2fc-54c2b4239cb3",
    paymentId: "42b94870-36b9-4573-96b6-b90b1c99a353",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `metadata`                                                                                    | Record<string, *components.MetadataOutputType*>                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.RefundStatus](../../models/components/refundstatus.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | [components.RefundReason](../../models/components/refundreason.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orderId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `revokeBenefits`                                                                              | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dispute`                                                                                     | [components.RefundDispute](../../models/components/refunddispute.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |