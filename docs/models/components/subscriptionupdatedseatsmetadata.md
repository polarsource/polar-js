# SubscriptionUpdatedSeatsMetadata

## Example Usage

```typescript
import { SubscriptionUpdatedSeatsMetadata } from "@polar-sh/sdk/models/components/subscriptionupdatedseatsmetadata.js";

let value: SubscriptionUpdatedSeatsMetadata = {
  subscriptionId: "<id>",
  seats: 355196,
  prorationBehavior: "prorate",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `subscriptionId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `seats`                                                                                              | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `prorationBehavior`                                                                                  | [components.SubscriptionProrationBehavior](../../models/components/subscriptionprorationbehavior.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |