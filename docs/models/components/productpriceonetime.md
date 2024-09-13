# ProductPriceOneTime

A one-time price for a product.

## Example Usage

```typescript
import { ProductPriceOneTime } from "@polar-sh/sdk/models/components";

let value: ProductPriceOneTime = {
  createdAt: new Date("2024-11-20T06:46:28.675Z"),
  modifiedAt: new Date("2022-08-18T05:39:59.272Z"),
  id: "<value>",
  priceAmount: 292147,
  priceCurrency: "<value>",
  isArchived: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the price.                                                                          |
| `priceAmount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | The price in cents.                                                                           |
| `priceCurrency`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The currency.                                                                                 |
| `isArchived`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the price is archived and no longer available.                                        |
| `type`                                                                                        | [components.ProductPriceOneTimeType](../../models/components/productpriceonetimetype.md)      | :heavy_check_mark:                                                                            | The type of the price.                                                                        |