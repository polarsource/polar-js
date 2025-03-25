# Refund

## Example Usage

```typescript
import { Refund } from "@polar-sh/sdk/models/components/refund.js";

let value: Refund = {
  createdAt: new Date("2024-05-25T04:08:34.395Z"),
  modifiedAt: new Date("2023-03-13T21:04:17.200Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  status: "canceled",
  reason: "customer_request",
  amount: 160305,
  taxAmount: 805831,
  currency: "Argentine Peso",
  organizationId: "<value>",
  orderId: "<value>",
  subscriptionId: "<value>",
  customerId: "<value>",
  revokeBenefits: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `metadata`                                                                                    | Record<string, *components.RefundMetadata*>                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
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