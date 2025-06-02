# CustomerPortalOrdersUpdateRequest

## Example Usage

```typescript
import { CustomerPortalOrdersUpdateRequest } from "@polar-sh/sdk/models/operations/customerportalordersupdate.js";

let value: CustomerPortalOrdersUpdateRequest = {
  id: "<value>",
  customerOrderUpdate: {
    billingName: "<value>",
    billingAddress: {
      country: "US",
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The order ID.                                                                    |
| `customerOrderUpdate`                                                            | [components.CustomerOrderUpdate](../../models/components/customerorderupdate.md) | :heavy_check_mark:                                                               | N/A                                                                              |