# ProductPriceOneTimeCustom

A pay-what-you-want price for a one-time product.

## Example Usage

```typescript
import { ProductPriceOneTimeCustom } from "@polar-sh/sdk/models/components";

let value: ProductPriceOneTimeCustom = {
  createdAt: new Date("2023-03-19T16:09:31.123Z"),
  modifiedAt: new Date("2023-11-17T21:39:15.131Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  priceCurrency: "<value>",
  minimumAmount: 152354,
  maximumAmount: 417486,
  presetAmount: 131289,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the price.                                                                          |
| `amountType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isArchived`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the price is archived and no longer available.                                        |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the product owning the price.                                                       |
| `priceCurrency`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The currency.                                                                                 |
| `minimumAmount`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The minimum amount the customer can pay.                                                      |
| `maximumAmount`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The maximum amount the customer can pay.                                                      |
| `presetAmount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | The initial amount shown to the customer.                                                     |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The type of the price.                                                                        |