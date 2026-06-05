# OrderFinalize

Schema to finalize a draft order and trigger an off-session charge.

## Example Usage

```typescript
import { OrderFinalize } from "@polar-sh/sdk/models/components/orderfinalize.js";

let value: OrderFinalize = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodId`                                                                                                                        | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | ID of the payment method to charge. Must belong to the order's customer. Falls back to the customer's default payment method when unset. |