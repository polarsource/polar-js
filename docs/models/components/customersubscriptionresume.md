# CustomerSubscriptionResume

## Example Usage

```typescript
import { CustomerSubscriptionResume } from "@polar-sh/sdk/models/components/customersubscriptionresume.js";

let value: CustomerSubscriptionResume = {
  resume: true,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `resume`                                                                                           | *true*                                                                                             | :heavy_check_mark:                                                                                 | Resume a paused subscription immediately, starting a new billing period and charging the customer. |