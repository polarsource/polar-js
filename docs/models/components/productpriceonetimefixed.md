# ProductPriceOneTimeFixed

A one-time price for a product.

## Example Usage

```typescript
import { ProductPriceOneTimeFixed } from "@polar-sh/sdk/models/components";

let value: ProductPriceOneTimeFixed = {
  createdAt: new Date("2023-07-22T01:08:24.502Z"),
  modifiedAt: new Date("2022-10-31T11:24:47.724Z"),
  id: "<value>",
  priceCurrency: "<value>",
  isArchived: false,
  priceAmount: 132068,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | Creation timestamp of the object.                                                                              |
| `modifiedAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | Last modification timestamp of the object.                                                                     |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the price.                                                                                           |
| `amountType`                                                                                                   | [components.ProductPriceOneTimeFixedAmountType](../../models/components/productpriceonetimefixedamounttype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `priceCurrency`                                                                                                | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The currency.                                                                                                  |
| `isArchived`                                                                                                   | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | Whether the price is archived and no longer available.                                                         |
| `priceAmount`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The price in cents.                                                                                            |
| `type`                                                                                                         | [components.ProductPriceOneTimeFixedType](../../models/components/productpriceonetimefixedtype.md)             | :heavy_check_mark:                                                                                             | The type of the price.                                                                                         |