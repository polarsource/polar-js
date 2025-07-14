# OrdersUpdateRequest

## Example Usage

```typescript
import { OrdersUpdateRequest } from "@polar-sh/sdk/models/operations/ordersupdate.js";

let value: OrdersUpdateRequest = {
  id: "<value>",
  orderUpdate: {
    billingName: "<value>",
    billingAddress: {
      country: "US",
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | The order ID.                                                    |
| `orderUpdate`                                                    | [components.OrderUpdate](../../models/components/orderupdate.md) | :heavy_check_mark:                                               | N/A                                                              |