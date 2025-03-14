# OrderItemSchema

An order line item.

## Example Usage

```typescript
import { OrderItemSchema } from "@polar-sh/sdk/models/components/orderitemschema.js";

let value: OrderItemSchema = {
  createdAt: new Date("2025-12-08T23:54:11.569Z"),
  modifiedAt: new Date("2025-09-12T02:41:54.847Z"),
  id: "<value>",
  label: "<value>",
  amount: 586717,
  taxAmount: 588158,
  proration: false,
  productPriceId: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `label`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Description of the line item charge.                                                          |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | Amount in cents, before discounts and taxes.                                                  |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | Sales tax amount in cents.                                                                    |
| `proration`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether this charge is due to a proration.                                                    |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | Associated price ID, if any.                                                                  |