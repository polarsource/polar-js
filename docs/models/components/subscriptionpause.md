# SubscriptionPause

## Example Usage

```typescript
import { SubscriptionPause } from "@polar-sh/sdk/models/components/subscriptionpause.js";

let value: SubscriptionPause = {
  pauseAtPeriodEnd: false,
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pauseAtPeriodEnd`                                                                                                                                                                | *boolean*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                | Pause an active subscription at the end of the current period.<br/><br/>Or cancel a scheduled pause on a subscription set to be paused at<br/>period end.                         |
| `resumesAt`                                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                     | :heavy_minus_sign:                                                                                                                                                                | Date at which the paused subscription should automatically resume.<br/><br/>If not set, the subscription stays paused until it is resumed manually.<br/>Must be after the current period end. |