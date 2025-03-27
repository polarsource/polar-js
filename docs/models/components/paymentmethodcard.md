# PaymentMethodCard

## Example Usage

```typescript
import { PaymentMethodCard } from "@polar-sh/sdk/models/components/paymentmethodcard.js";

let value: PaymentMethodCard = {
  id: "<id>",
  createdAt: new Date("2025-09-17T15:39:07.023Z"),
  default: false,
  card: {
    brand: "<value>",
    last4: "<value>",
    expMonth: 825635,
    expYear: 7439,
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