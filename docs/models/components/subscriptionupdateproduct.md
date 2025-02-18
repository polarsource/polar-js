# SubscriptionUpdateProduct

## Example Usage

```typescript
import { SubscriptionUpdateProduct } from "@polar-sh/sdk/models/components/subscriptionupdateproduct.js";

let value: SubscriptionUpdateProduct = {
  productId: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `productId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Update subscription to another product.                                                                    |
| `prorationBehavior`                                                                                        | [components.SubscriptionProrationBehavior](../../models/components/subscriptionprorationbehavior.md)       | :heavy_minus_sign:                                                                                         | Determine how to handle the proration billing. If not provided, will use the default organization setting. |