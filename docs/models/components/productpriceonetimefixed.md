# ProductPriceOneTimeFixed

A one-time price for a product.

## Example Usage

```typescript
import { ProductPriceOneTimeFixed } from "@polar-sh/sdk/models/components";

let value: ProductPriceOneTimeFixed = {
  createdAt: new Date("2022-01-27T21:02:37.558Z"),
  modifiedAt: new Date("2023-04-19T01:15:36.545Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  priceCurrency: "<value>",
  priceAmount: 800937,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | Creation timestamp of the object.                                                                              |
| `modifiedAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | Last modification timestamp of the object.                                                                     |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the price.                                                                                           |
| `amountType`                                                                                                   | [components.ProductPriceOneTimeFixedAmountType](../../models/components/productpriceonetimefixedamounttype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `isArchived`                                                                                                   | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | Whether the price is archived and no longer available.                                                         |
| `productId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the product owning the price.                                                                        |
| `priceCurrency`                                                                                                | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The currency.                                                                                                  |
| `priceAmount`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The price in cents.                                                                                            |
| `type`                                                                                                         | [components.ProductPriceOneTimeFixedType](../../models/components/productpriceonetimefixedtype.md)             | :heavy_check_mark:                                                                                             | The type of the price.                                                                                         |