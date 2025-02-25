# PaymentMethodCard

## Example Usage

```typescript
import { PaymentMethodCard } from "@polar-sh/sdk/models/components/paymentmethodcard.js";

let value: PaymentMethodCard = {
  id: "<id>",
  createdAt: new Date("2024-11-14T14:40:11.332Z"),
  default: false,
  card: {
    brand: "<value>",
    last4: "<value>",
    expMonth: 737007,
    expYear: 659114,
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