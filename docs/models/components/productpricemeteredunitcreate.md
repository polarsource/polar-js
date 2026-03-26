# ProductPriceMeteredUnitCreate

Schema to create a metered price with a fixed unit price.

## Example Usage

```typescript
import { ProductPriceMeteredUnitCreate } from "@polar-sh/sdk/models/components/productpricemeteredunitcreate.js";

let value: ProductPriceMeteredUnitCreate = {
  amountType: "metered_unit",
  meterId: "<value>",
  unitAmount: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `amountType`                                                                                           | *"metered_unit"*                                                                                       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `priceCurrency`                                                                                        | [components.PresentmentCurrency](../../models/components/presentmentcurrency.md)                       | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `taxBehavior`                                                                                          | [components.TaxBehaviorOption](../../models/components/taxbehavioroption.md)                           | :heavy_minus_sign:                                                                                     | The tax behavior of the price. If not set, it will default to the organization's default tax behavior. |
| `meterId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the meter associated to the price.                                                           |
| `unitAmount`                                                                                           | *components.UnitAmount*                                                                                | :heavy_check_mark:                                                                                     | The price per unit in cents. Supports up to 12 decimal places.                                         |
| `capAmount`                                                                                            | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Optional maximum amount in cents that can be charged, regardless of the number of units consumed.      |