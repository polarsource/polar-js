# ProductPriceOneTimeCustom

A pay-what-you-want price for a one-time product.

## Example Usage

```typescript
import { ProductPriceOneTimeCustom } from "@polar-sh/sdk/models/components";

let value: ProductPriceOneTimeCustom = {
  createdAt: new Date("2024-08-25T07:59:43.022Z"),
  modifiedAt: new Date("2022-08-27T21:13:31.086Z"),
  id: "<value>",
  isArchived: false,
  priceCurrency: "<value>",
  minimumAmount: 227669,
  maximumAmount: 748433,
  presetAmount: 812057,
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