# CustomerSubscriptionUpdateSeats

## Example Usage

```typescript
import { CustomerSubscriptionUpdateSeats } from "@polar-sh/sdk/models/components/customersubscriptionupdateseats.js";

let value: CustomerSubscriptionUpdateSeats = {
  seats: 779936,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `seats`                                                                                                    | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Update the number of seats for this subscription.                                                          |
| `prorationBehavior`                                                                                        | [components.SubscriptionProrationBehavior](../../models/components/subscriptionprorationbehavior.md)       | :heavy_minus_sign:                                                                                         | Determine how to handle the proration billing. If not provided, will use the default organization setting. |