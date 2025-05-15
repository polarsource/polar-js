# GenericPayment

Schema of a payment with a generic payment method.

## Example Usage

```typescript
import { GenericPayment } from "@polar-sh/sdk/models/components/genericpayment.js";

let value: GenericPayment = {
  createdAt: new Date("2025-05-15T10:27:07.538Z"),
  modifiedAt: new Date("2024-05-09T06:09:46.871Z"),
  id: "<value>",
  processor: "stripe",
  status: "failed",
  amount: 1000,
  currency: "usd",
  method: "card",
  declineReason: "insufficient_funds",
  declineMessage: "Your card has insufficient funds.",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  checkoutId: "e4b478fa-cd25-4253-9f1f-8a41e6370ede",
  orderId: "e4b478fa-cd25-4253-9f1f-8a41e6370ede",
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
| `method`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The payment method used.                                                                      | card                                                                                          |
| `declineReason`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Error code, if the payment was declined.                                                      | insufficient_funds                                                                            |
| `declineMessage`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-reasable error message, if the payment was declined.                                    | Your card has insufficient funds.                                                             |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization that owns the payment.                                             | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                          |
| `checkoutId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the checkout session associated with this payment.                                  | e4b478fa-cd25-4253-9f1f-8a41e6370ede                                                          |
| `orderId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the order associated with this payment.                                             | e4b478fa-cd25-4253-9f1f-8a41e6370ede                                                          |