# SubscriptionUpdateProduct

## Example Usage

```typescript
import { SubscriptionUpdateProduct } from "@polar-sh/sdk/models/components/subscriptionupdateproduct.js";

let value: SubscriptionUpdateProduct = {
  productId: "d8dd2de1-21b7-4a41-8bc3-ce909c0cfe23",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `productId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Update subscription to another product.                                                                    | d8dd2de1-21b7-4a41-8bc3-ce909c0cfe23                                                                       |
| `prorationBehavior`                                                                                        | [components.SubscriptionProrationBehavior](../../models/components/subscriptionprorationbehavior.md)       | :heavy_minus_sign:                                                                                         | Determine how to handle the proration billing. If not provided, will use the default organization setting. |                                                                                                            |