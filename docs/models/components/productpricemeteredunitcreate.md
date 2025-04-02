# ProductPriceMeteredUnitCreate

Schema to create a metered price with a fixed unit price.

## Example Usage

```typescript
import { ProductPriceMeteredUnitCreate } from "@polar-sh/sdk/models/components/productpricemeteredunitcreate.js";

let value: ProductPriceMeteredUnitCreate = {
  meterId: "<value>",
  unitAmount: 54255,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `amountType`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `meterId`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | The ID of the meter associated to the price.                                                      |
| `priceCurrency`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | The currency. Currently, only `usd` is supported.                                                 |
| `unitAmount`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | The price per unit in cents.                                                                      |
| `capAmount`                                                                                       | *number*                                                                                          | :heavy_minus_sign:                                                                                | Optional maximum amount in cents that can be charged, regardless of the number of units consumed. |