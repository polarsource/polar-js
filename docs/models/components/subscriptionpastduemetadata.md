# SubscriptionPastDueMetadata

## Example Usage

```typescript
import { SubscriptionPastDueMetadata } from "@polar-sh/sdk/models/components/subscriptionpastduemetadata.js";

let value: SubscriptionPastDueMetadata = {
  subscriptionId: "<id>",
  pastDueAt: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `subscriptionId`         | *string*                 | :heavy_check_mark:       | N/A                      |
| `productId`              | *string*                 | :heavy_minus_sign:       | N/A                      |
| `pastDueAt`              | *string*                 | :heavy_check_mark:       | N/A                      |
| `amount`                 | *number*                 | :heavy_minus_sign:       | N/A                      |
| `currency`               | *string*                 | :heavy_minus_sign:       | N/A                      |
| `recurringInterval`      | *string*                 | :heavy_minus_sign:       | N/A                      |
| `recurringIntervalCount` | *number*                 | :heavy_minus_sign:       | N/A                      |