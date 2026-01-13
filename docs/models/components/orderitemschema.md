# OrderItemSchema

An order line item.

## Example Usage

```typescript
import { OrderItemSchema } from "@polar-sh/sdk/models/components/orderitemschema.js";

let value: OrderItemSchema = {
  createdAt: new Date("2025-07-10T10:44:08.434Z"),
  modifiedAt: new Date("2025-09-03T11:39:50.690Z"),
  id: "<value>",
  label: "Pro Plan",
  amount: 10000,
  taxAmount: 720,
  proration: false,
  productPriceId: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |                                                                                               |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |                                                                                               |
| `label`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Description of the line item charge.                                                          | Pro Plan                                                                                      |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | Amount in cents, before discounts and taxes.                                                  | 10000                                                                                         |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | Sales tax amount in cents.                                                                    | 720                                                                                           |
| `proration`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether this charge is due to a proration.                                                    | false                                                                                         |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | Associated price ID, if any.                                                                  |                                                                                               |