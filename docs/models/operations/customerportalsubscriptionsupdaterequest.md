# CustomerPortalSubscriptionsUpdateRequest

## Example Usage

```typescript
import { CustomerPortalSubscriptionsUpdateRequest } from "@polar-sh/sdk/models/operations/customerportalsubscriptionsupdate.js";

let value: CustomerPortalSubscriptionsUpdateRequest = {
  id: "<value>",
  customerSubscriptionUpdate: {
    productId: "<value>",
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `id`                                    | *string*                                | :heavy_check_mark:                      | The subscription ID.                    |
| `customerSubscriptionUpdate`            | *components.CustomerSubscriptionUpdate* | :heavy_check_mark:                      | N/A                                     |