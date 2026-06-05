# CustomerPaymentMethodGeneric

## Example Usage

```typescript
import { CustomerPaymentMethodGeneric } from "@polar-sh/sdk/models/components/customerpaymentmethodgeneric.js";

let value: CustomerPaymentMethodGeneric = {
  id: "<value>",
  createdAt: new Date("2026-04-23T03:04:54.094Z"),
  modifiedAt: new Date("2026-03-20T02:55:38.247Z"),
  processor: "stripe",
  customerId: "<value>",
  type: "<value>",
  isDefault: false,
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
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `isDefault`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether this payment method is the customer's default payment method.                         | false                                                                                         |