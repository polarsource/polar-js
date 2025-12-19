# SubscriptionCanceledMetadata

## Example Usage

```typescript
import { SubscriptionCanceledMetadata } from "@polar-sh/sdk/models/components/subscriptioncanceledmetadata.js";

let value: SubscriptionCanceledMetadata = {
  subscriptionId: "<id>",
  amount: 172653,
  currency: "Bahraini Dinar",
  recurringInterval: "<value>",
  recurringIntervalCount: 541509,
  canceledAt: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `subscriptionId`              | *string*                      | :heavy_check_mark:            | N/A                           |
| `productId`                   | *string*                      | :heavy_minus_sign:            | N/A                           |
| `amount`                      | *number*                      | :heavy_check_mark:            | N/A                           |
| `currency`                    | *string*                      | :heavy_check_mark:            | N/A                           |
| `recurringInterval`           | *string*                      | :heavy_check_mark:            | N/A                           |
| `recurringIntervalCount`      | *number*                      | :heavy_check_mark:            | N/A                           |
| `customerCancellationReason`  | *string*                      | :heavy_minus_sign:            | N/A                           |
| `customerCancellationComment` | *string*                      | :heavy_minus_sign:            | N/A                           |
| `canceledAt`                  | *string*                      | :heavy_check_mark:            | N/A                           |
| `endsAt`                      | *string*                      | :heavy_minus_sign:            | N/A                           |
| `cancelAtPeriodEnd`           | *boolean*                     | :heavy_minus_sign:            | N/A                           |