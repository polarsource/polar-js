# ProductPriceOneTimeCustom

A pay-what-you-want price for a one-time product.

## Example Usage

```typescript
import { ProductPriceOneTimeCustom } from "@polar-sh/sdk/models/components";

let value: ProductPriceOneTimeCustom = {
  createdAt: new Date("2022-04-20T21:11:30.522Z"),
  modifiedAt: new Date("2022-09-07T13:46:41.792Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  priceCurrency: "<value>",
  minimumAmount: 727440,
  maximumAmount: 647553,
  presetAmount: 563024,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Creation timestamp of the object.                                                                                |
| `modifiedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Last modification timestamp of the object.                                                                       |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the price.                                                                                             |
| `amountType`                                                                                                     | [components.ProductPriceOneTimeCustomAmountType](../../models/components/productpriceonetimecustomamounttype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `isArchived`                                                                                                     | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether the price is archived and no longer available.                                                           |
| `productId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the product owning the price.                                                                          |
| `priceCurrency`                                                                                                  | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The currency.                                                                                                    |
| `minimumAmount`                                                                                                  | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The minimum amount the customer can pay.                                                                         |
| `maximumAmount`                                                                                                  | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The maximum amount the customer can pay.                                                                         |
| `presetAmount`                                                                                                   | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The initial amount shown to the customer.                                                                        |
| `type`                                                                                                           | [components.ProductPriceOneTimeCustomType](../../models/components/productpriceonetimecustomtype.md)             | :heavy_check_mark:                                                                                               | The type of the price.                                                                                           |