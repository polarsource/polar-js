# CardPayment

Schema of a payment with a card payment method.

## Example Usage

```typescript
import { CardPayment } from "@polar-sh/sdk/models/components/cardpayment.js";

let value: CardPayment = {
  createdAt: new Date("2025-08-19T22:20:52.095Z"),
  modifiedAt: new Date("2025-02-12T06:48:23.838Z"),
  id: "<value>",
  processor: "stripe",
  status: "succeeded",
  amount: 1000,
  currency: "usd",
  method: "card",
  declineReason: "insufficient_funds",
  declineMessage: "Your card has insufficient funds.",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  checkoutId: "e4b478fa-cd25-4253-9f1f-8a41e6370ede",
  orderId: "e4b478fa-cd25-4253-9f1f-8a41e6370ede",
  methodMetadata: {
    brand: "visa",
    last4: "4242",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |                                                                                               |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |                                                                                               |
| `processor`                                                                                   | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [components.PaymentStatus](../../models/components/paymentstatus.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | The payment amount in cents.                                                                  | 1000                                                                                          |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The payment currency. Currently, only `usd` is supported.                                     | usd                                                                                           |
| `method`                                                                                      | *"card"*                                                                                      | :heavy_check_mark:                                                                            | The payment method used.                                                                      | card                                                                                          |
| `declineReason`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Error code, if the payment was declined.                                                      | insufficient_funds                                                                            |
| `declineMessage`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-reasable error message, if the payment was declined.                                    | Your card has insufficient funds.                                                             |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization that owns the payment.                                             | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                          |
| `checkoutId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the checkout session associated with this payment.                                  | e4b478fa-cd25-4253-9f1f-8a41e6370ede                                                          |
| `orderId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the order associated with this payment.                                             | e4b478fa-cd25-4253-9f1f-8a41e6370ede                                                          |
| `processorMetadata`                                                                           | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Additional metadata from the payment processor for internal use.                              |                                                                                               |
| `methodMetadata`                                                                              | [components.CardPaymentMetadata](../../models/components/cardpaymentmetadata.md)              | :heavy_check_mark:                                                                            | Additional metadata for a card payment method.                                                |                                                                                               |