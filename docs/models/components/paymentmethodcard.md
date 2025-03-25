# PaymentMethodCard

## Example Usage

```typescript
import { PaymentMethodCard } from "@polar-sh/sdk/models/components/paymentmethodcard.js";

let value: PaymentMethodCard = {
  id: "<id>",
  createdAt: new Date("2023-10-02T10:20:48.033Z"),
  default: false,
  card: {
    brand: "<value>",
    last4: "<value>",
    expMonth: 292645,
    expYear: 425163,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `default`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `card`                                                                                        | [components.PaymentMethodCardData](../../models/components/paymentmethodcarddata.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |