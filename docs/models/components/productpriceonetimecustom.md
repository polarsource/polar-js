# ProductPriceOneTimeCustom

A pay-what-you-want price for a one-time product.

## Example Usage

```typescript
import { ProductPriceOneTimeCustom } from "@polar-sh/sdk/models/components";

let value: ProductPriceOneTimeCustom = {
  createdAt: new Date("2024-04-25T17:20:40.400Z"),
  modifiedAt: new Date("2023-05-17T04:31:58.000Z"),
  id: "<value>",
  isArchived: false,
  priceCurrency: "<value>",
  minimumAmount: 132662,
  maximumAmount: 37211,
  presetAmount: 993378,
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
| `priceCurrency`                                                                                                  | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The currency.                                                                                                    |
| `minimumAmount`                                                                                                  | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The minimum amount the customer can pay.                                                                         |
| `maximumAmount`                                                                                                  | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The maximum amount the customer can pay.                                                                         |
| `presetAmount`                                                                                                   | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The initial amount shown to the customer.                                                                        |
| `type`                                                                                                           | [components.ProductPriceOneTimeCustomType](../../models/components/productpriceonetimecustomtype.md)             | :heavy_check_mark:                                                                                               | The type of the price.                                                                                           |