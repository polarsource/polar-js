# OrderUpdate

Schema to update an order.

## Example Usage

```typescript
import { OrderUpdate } from "@polar-sh/sdk/models/components/orderupdate.js";

let value: OrderUpdate = {
  billingName: null,
  billingAddress: {
    country: "US",
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `billingName`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The name of the customer that should appear on the invoice. Can't be updated after the invoice is generated.    |
| `billingAddress`                                                                                                | [components.AddressInput](../../models/components/addressinput.md)                                              | :heavy_check_mark:                                                                                              | The address of the customer that should appear on the invoice. Can't be updated after the invoice is generated. |