# SubscriptionUpdateDiscount

## Example Usage

```typescript
import { SubscriptionUpdateDiscount } from "@polar-sh/sdk/models/components/subscriptionupdatediscount.js";

let value: SubscriptionUpdateDiscount = {
  discountId: "<value>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `discountId`                                                                                                                                           | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | Update the subscription to apply a new discount. If set to `null`, the discount will be removed. The change will be applied on the next billing cycle. |