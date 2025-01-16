# SubscriptionsUpdateRequest

## Example Usage

```typescript
import { SubscriptionsUpdateRequest } from "@polar-sh/sdk/models/operations";

let value: SubscriptionsUpdateRequest = {
  id: "<value>",
  subscriptionUpdate: {
    productPriceId: "<value>",
  },
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `id`                            | *string*                        | :heavy_check_mark:              | The subscription ID.            |
| `subscriptionUpdate`            | *components.SubscriptionUpdate* | :heavy_check_mark:              | N/A                             |