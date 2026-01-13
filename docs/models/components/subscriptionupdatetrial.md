# SubscriptionUpdateTrial

## Example Usage

```typescript
import { SubscriptionUpdateTrial } from "@polar-sh/sdk/models/components/subscriptionupdatetrial.js";

let value: SubscriptionUpdateTrial = {
  trialEnd: new Date("2024-10-11T00:45:49.772Z"),
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `trialEnd`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Set or extend the trial period of the subscription. If set to `now`, the trial will end immediately. |