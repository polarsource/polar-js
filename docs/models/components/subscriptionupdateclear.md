# SubscriptionUpdateClear

## Example Usage

```typescript
import { SubscriptionUpdateClear } from "@polar-sh/sdk/models/components/subscriptionupdateclear.js";

let value: SubscriptionUpdateClear = {
  pendingUpdate: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `pendingUpdate`                                                                 | *any*                                                                           | :heavy_check_mark:                                                              | Clear the pending subscription update. Set to null to remove scheduled changes. |