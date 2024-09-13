# UsersSubscriptionsUpdateRequest

## Example Usage

```typescript
import { UsersSubscriptionsUpdateRequest } from "@polar-sh/sdk/models/operations";

let value: UsersSubscriptionsUpdateRequest = {
  id: "<value>",
  userSubscriptionUpdate: {
    productPriceId: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | The subscription ID.                                                                   |
| `userSubscriptionUpdate`                                                               | [components.UserSubscriptionUpdate](../../models/components/usersubscriptionupdate.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |