# ProductPriceMeteredUnit

A metered, usage-based, price for a product, with a fixed unit price.

## Example Usage

```typescript
import { ProductPriceMeteredUnit } from "@polar-sh/sdk/models/components/productpricemeteredunit.js";

let value: ProductPriceMeteredUnit = {
  createdAt: new Date("2024-04-18T18:43:55.492Z"),
  modifiedAt: new Date("2024-07-26T02:35:23.934Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  priceCurrency: "<value>",
  unitAmount: 117320,
  includedUnits: 107004,
  capAmount: 589695,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the price.                                                                                                    |
| `amountType`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `isArchived`                                                                                                            | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether the price is archived and no longer available.                                                                  |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the product owning the price.                                                                                 |
| `type`                                                                                                                  | [components.ProductPriceType](../../models/components/productpricetype.md)                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`recurringInterval`~~                                                                                                 | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                    | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `priceCurrency`                                                                                                         | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The currency.                                                                                                           |
| `unitAmount`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The price per unit in cents.                                                                                            |
| `includedUnits`                                                                                                         | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The number of units included in the price. They will be deducted from the total.                                        |
| `capAmount`                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The maximum amount in cents that can be charged, regardless of the number of units consumed.                            |
| `meterId`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the meter associated to the price.                                                                            |
| `meter`                                                                                                                 | [components.ProductPriceMeter](../../models/components/productpricemeter.md)                                            | :heavy_check_mark:                                                                                                      | A meter associated to a metered price.                                                                                  |