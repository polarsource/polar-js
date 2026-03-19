# CustomerOrderUpdate

Schema to update an order.

## Example Usage

```typescript
import { CustomerOrderUpdate } from "@polar-sh/sdk/models/components/customerorderupdate.js";

let value: CustomerOrderUpdate = {
  billingAddress: {
    country: "US",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `billingName`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The name of the customer that should appear on the invoice.                                                |
| `billingAddress`                                                                                           | [components.AddressInput](../../models/components/addressinput.md)                                         | :heavy_minus_sign:                                                                                         | The address of the customer that should appear on the invoice. Country and state fields cannot be updated. |