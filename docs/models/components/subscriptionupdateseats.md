# SubscriptionUpdateSeats

## Example Usage

```typescript
import { SubscriptionUpdateSeats } from "@polar-sh/sdk/models/components/subscriptionupdateseats.js";

let value: SubscriptionUpdateSeats = {
  seats: 495278,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `seats`                                                                                                    | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Update the number of seats for this subscription.                                                          |
| `prorationBehavior`                                                                                        | [components.SubscriptionProrationBehavior](../../models/components/subscriptionprorationbehavior.md)       | :heavy_minus_sign:                                                                                         | Determine how to handle the proration billing. If not provided, will use the default organization setting. |