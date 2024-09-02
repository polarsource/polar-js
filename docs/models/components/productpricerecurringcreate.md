# ProductPriceRecurringCreate

Schema to create a recurring product price, i.e. a subscription.

## Example Usage

```typescript
import { ProductPriceRecurringCreate } from "@polar-sh/sdk/models/components";

let value: ProductPriceRecurringCreate = {
    recurringInterval: "month",
    priceAmount: 107004,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.ProductPriceRecurringCreateType](../../models/components/productpricerecurringcreatetype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `recurringInterval`                                                                                      | [components.ProductPriceRecurringInterval](../../models/components/productpricerecurringinterval.md)     | :heavy_check_mark:                                                                                       | The recurring interval of the price.                                                                     |
| `priceAmount`                                                                                            | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The price in cents.                                                                                      |
| `priceCurrency`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The currency. Currently, only `usd` is supported.                                                        |