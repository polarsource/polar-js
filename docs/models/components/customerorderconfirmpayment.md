# CustomerOrderConfirmPayment

Schema to confirm a retry payment using a Stripe confirmation token.

## Example Usage

```typescript
import { CustomerOrderConfirmPayment } from "@polar-sh/sdk/models/components/customerorderconfirmpayment.js";

let value: CustomerOrderConfirmPayment = {
  confirmationTokenId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `confirmationTokenId`                                                      | *string*                                                                   | :heavy_check_mark:                                                         | ID of the Stripe confirmation token.                                       |
| `paymentProcessor`                                                         | [components.PaymentProcessor](../../models/components/paymentprocessor.md) | :heavy_minus_sign:                                                         | N/A                                                                        |