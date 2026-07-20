# SubscriptionResume

## Example Usage

```typescript
import { SubscriptionResume } from "@polar-sh/sdk/models/components/subscriptionresume.js";

let value: SubscriptionResume = {
  resume: true,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `resume`                                                                                           | *true*                                                                                             | :heavy_check_mark:                                                                                 | Resume a paused subscription immediately, starting a new billing period and charging the customer. |