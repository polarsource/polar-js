# CustomerPaymentMethodCard

## Example Usage

```typescript
import { CustomerPaymentMethodCard } from "@polar-sh/sdk/models/components/customerpaymentmethodcard.js";

let value: CustomerPaymentMethodCard = {
  id: "<value>",
  createdAt: new Date("2024-03-06T08:30:45.937Z"),
  modifiedAt: new Date("2025-07-10T11:26:44.086Z"),
  processor: "stripe",
  customerId: "<value>",
  type: "card",
  methodMetadata: {
    brand: "<value>",
    last4: "<value>",
    expMonth: 166298,
    expYear: 515575,
  },
  isDefault: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |                                                                                               |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |                                                                                               |
| `processor`                                                                                   | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `type`                                                                                        | *"card"*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `methodMetadata`                                                                              | [components.PaymentMethodCardMetadata](../../models/components/paymentmethodcardmetadata.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `isDefault`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether this payment method is the customer's default payment method.                         | true                                                                                          |