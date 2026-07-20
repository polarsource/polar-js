# SubscriptionPausedMetadata

## Example Usage

```typescript
import { SubscriptionPausedMetadata } from "@polar-sh/sdk/models/components/subscriptionpausedmetadata.js";

let value: SubscriptionPausedMetadata = {
  subscriptionId: "<id>",
  pausedAt: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `subscriptionId`         | *string*                 | :heavy_check_mark:       | N/A                      |
| `productId`              | *string*                 | :heavy_minus_sign:       | N/A                      |
| `amount`                 | *number*                 | :heavy_minus_sign:       | N/A                      |
| `currency`               | *string*                 | :heavy_minus_sign:       | N/A                      |
| `recurringInterval`      | *string*                 | :heavy_minus_sign:       | N/A                      |
| `recurringIntervalCount` | *number*                 | :heavy_minus_sign:       | N/A                      |
| `pausedAt`               | *string*                 | :heavy_check_mark:       | N/A                      |
| `resumesAt`              | *string*                 | :heavy_minus_sign:       | N/A                      |