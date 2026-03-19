# SubscriptionUpdatedProductMetadata

## Example Usage

```typescript
import { SubscriptionUpdatedProductMetadata } from "@polar-sh/sdk/models/components/subscriptionupdatedproductmetadata.js";

let value: SubscriptionUpdatedProductMetadata = {
  subscriptionId: "<id>",
  productId: "<id>",
  prorationBehavior: "invoice",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `subscriptionId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `productId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `prorationBehavior`                                                                                  | [components.SubscriptionProrationBehavior](../../models/components/subscriptionprorationbehavior.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |