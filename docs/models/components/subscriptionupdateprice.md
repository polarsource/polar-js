# SubscriptionUpdatePrice

## Example Usage

```typescript
import { SubscriptionUpdatePrice } from "@polar-sh/sdk/models/components/subscriptionupdateprice.js";

let value: SubscriptionUpdatePrice = {
  productPriceId: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `productPriceId`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Update subscription to another price.                                                                      |
| `prorationBehavior`                                                                                        | [components.SubscriptionProrationBehavior](../../models/components/subscriptionprorationbehavior.md)       | :heavy_minus_sign:                                                                                         | Determine how to handle the proration billing. If not provided, will use the default organization setting. |