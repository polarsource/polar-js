# SubscriptionUpdateBillingPeriod

## Example Usage

```typescript
import { SubscriptionUpdateBillingPeriod } from "@polar-sh/sdk/models/components/subscriptionupdatebillingperiod.js";

let value: SubscriptionUpdateBillingPeriod = {
  currentBillingPeriodEnd: new Date("2026-11-17T15:45:43.046Z"),
};
```

## Fields

| Field                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `currentBillingPeriodEnd`                                                                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                 | Set a new date for the end of the current billing period. The subscription will renew on this date. Needs to be later than the current value.<br/><br/>It is not possible to update the current billing period on a canceled subscription. |