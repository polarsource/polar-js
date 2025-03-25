# OrderItemSchema

An order line item.

## Example Usage

```typescript
import { OrderItemSchema } from "@polar-sh/sdk/models/components/orderitemschema.js";

let value: OrderItemSchema = {
  createdAt: new Date("2025-07-19T07:42:14.060Z"),
  modifiedAt: new Date("2025-06-01T03:31:21.759Z"),
  id: "<value>",
  label: "<value>",
  amount: 998355,
  taxAmount: 847308,
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