# CustomerOrderUpdate

Schema to update an order.

## Example Usage

```typescript
import { CustomerOrderUpdate } from "@polar-sh/sdk/models/components/customerorderupdate.js";

let value: CustomerOrderUpdate = {
  billingName: "<value>",
  billingAddress: {
    country: "US",
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `billingName`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The name of the customer that should appear on the invoice. Can't be updated after the invoice is generated.    |
| `billingAddress`                                                                                                | [components.Address](../../models/components/address.md)                                                        | :heavy_check_mark:                                                                                              | The address of the customer that should appear on the invoice. Can't be updated after the invoice is generated. |