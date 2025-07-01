# PaymentMethodCard

## Example Usage

```typescript
import { PaymentMethodCard } from "@polar-sh/sdk/models/components/paymentmethodcard.js";

let value: PaymentMethodCard = {
  id: "<value>",
  createdAt: new Date("2024-02-24T15:23:31.500Z"),
  modifiedAt: new Date("2024-11-29T12:48:39.365Z"),
  processor: "stripe",
  customerId: "<value>",
  methodMetadata: {
    brand: "<value>",
    last4: "<value>",
    expMonth: 438108,
    expYear: 447179,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `processor`                                                                                   | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `methodMetadata`                                                                              | [components.PaymentMethodCardMetadata](../../models/components/paymentmethodcardmetadata.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |