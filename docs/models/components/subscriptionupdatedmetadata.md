# SubscriptionUpdatedMetadata

## Example Usage

```typescript
import { SubscriptionUpdatedMetadata } from "@polar-sh/sdk/models/components/subscriptionupdatedmetadata.js";

let value: SubscriptionUpdatedMetadata = {
  subscriptionId: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `productId`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `prorationBehavior`                                                                                  | [components.SubscriptionProrationBehavior](../../models/components/subscriptionprorationbehavior.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `discountId`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `trialEnd`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `seats`                                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `billingPeriodEnd`                                                                                   | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `subscriptionId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |