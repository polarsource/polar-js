# ProductPriceOneTime

A one-time price for a product.

## Example Usage

```typescript
import { ProductPriceOneTime } from "@polar-sh/sdk/models/components";

let value: ProductPriceOneTime = {
    createdAt: new Date("2023-10-03T14:03:30.985Z"),
    modifiedAt: new Date("2022-02-19T23:50:50.590Z"),
    id: "<value>",
    priceAmount: 961937,
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