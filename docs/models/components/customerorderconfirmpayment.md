# CustomerOrderConfirmPayment

Schema to confirm a retry payment using either a saved payment method or a new confirmation token.

## Example Usage

```typescript
import { CustomerOrderConfirmPayment } from "@polar-sh/sdk/models/components/customerorderconfirmpayment.js";

let value: CustomerOrderConfirmPayment = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `confirmationTokenId`                                                      | *string*                                                                   | :heavy_minus_sign:                                                         | ID of the Stripe confirmation token for new payment methods.               |
| `paymentMethodId`                                                          | *string*                                                                   | :heavy_minus_sign:                                                         | ID of an existing saved payment method.                                    |
| `paymentProcessor`                                                         | [components.PaymentProcessor](../../models/components/paymentprocessor.md) | :heavy_minus_sign:                                                         | N/A                                                                        |