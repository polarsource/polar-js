# ProductPriceMeteredUnit

A metered, usage-based, price for a product, with a fixed unit price.

## Example Usage

```typescript
import { ProductPriceMeteredUnit } from "@polar-sh/sdk/models/components/productpricemeteredunit.js";

let value: ProductPriceMeteredUnit = {
  createdAt: new Date("2024-10-21T15:18:33.510Z"),
  modifiedAt: null,
  id: "<value>",
  source: "ad_hoc",
  amountType: "metered_unit",
  priceCurrency: "<value>",
  taxBehavior: "exclusive",
  isArchived: false,
  productId: "<value>",
  unitAmount: "<value>",
  capAmount: 700651,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
    unit: "scalar",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | Creation timestamp of the object.                                                               |
| `modifiedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | Last modification timestamp of the object.                                                      |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | The ID of the price.                                                                            |
| `source`                                                                                        | [components.ProductPriceSource](../../models/components/productpricesource.md)                  | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `amountType`                                                                                    | *"metered_unit"*                                                                                | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `priceCurrency`                                                                                 | *string*                                                                                        | :heavy_check_mark:                                                                              | The currency in which the customer will be charged.                                             |
| `taxBehavior`                                                                                   | [components.TaxBehaviorOption](../../models/components/taxbehavioroption.md)                    | :heavy_check_mark:                                                                              | The tax behavior of the price. If null, it defaults to the organization's default tax behavior. |
| `isArchived`                                                                                    | *boolean*                                                                                       | :heavy_check_mark:                                                                              | Whether the price is archived and no longer available.                                          |
| `productId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | The ID of the product owning the price.                                                         |
| `unitAmount`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | The price per unit in cents.                                                                    |
| `capAmount`                                                                                     | *number*                                                                                        | :heavy_check_mark:                                                                              | The maximum amount in cents that can be charged, regardless of the number of units consumed.    |
| `meterId`                                                                                       | *string*                                                                                        | :heavy_check_mark:                                                                              | The ID of the meter associated to the price.                                                    |
| `meter`                                                                                         | [components.ProductPriceMeter](../../models/components/productpricemeter.md)                    | :heavy_check_mark:                                                                              | A meter associated to a metered price.                                                          |