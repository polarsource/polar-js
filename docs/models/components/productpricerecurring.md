# ProductPriceRecurring

A recurring price for a product, i.e. a subscription.

## Example Usage

```typescript
import { ProductPriceRecurring } from "@polar-sh/sdk/models/components";

let value: ProductPriceRecurring = {
    createdAt: new Date("2022-08-27T07:49:04.098Z"),
    modifiedAt: new Date("2022-04-02T10:20:37.405Z"),
    id: "<value>",
    priceAmount: 749255,
    priceCurrency: "<value>",
    isArchived: false,
    recurringInterval: "year",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the price.                                                                                 |
| `priceAmount`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | The price in cents.                                                                                  |
| `priceCurrency`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | The currency.                                                                                        |
| `isArchived`                                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the price is archived and no longer available.                                               |
| `type`                                                                                               | [components.ProductPriceRecurringType](../../models/components/productpricerecurringtype.md)         | :heavy_check_mark:                                                                                   | The type of the price.                                                                               |
| `recurringInterval`                                                                                  | [components.ProductPriceRecurringInterval](../../models/components/productpricerecurringinterval.md) | :heavy_check_mark:                                                                                   | The recurring interval of the price, if type is `recurring`.                                         |