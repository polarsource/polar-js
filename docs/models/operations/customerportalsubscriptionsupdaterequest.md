# CustomerPortalSubscriptionsUpdateRequest

## Example Usage

```typescript
import { CustomerPortalSubscriptionsUpdateRequest } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalSubscriptionsUpdateRequest = {
  id: "<value>",
  customerSubscriptionUpdate: {
    productPriceId: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The subscription ID.                                                                           |
| `customerSubscriptionUpdate`                                                                   | [components.CustomerSubscriptionUpdate](../../models/components/customersubscriptionupdate.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |