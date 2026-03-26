# ProductPriceFreeCreate

Schema to create a free price.

## Example Usage

```typescript
import { ProductPriceFreeCreate } from "@polar-sh/sdk/models/components/productpricefreecreate.js";

let value: ProductPriceFreeCreate = {
  amountType: "free",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `amountType`                                                                                           | *"free"*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `priceCurrency`                                                                                        | [components.PresentmentCurrency](../../models/components/presentmentcurrency.md)                       | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `taxBehavior`                                                                                          | [components.TaxBehaviorOption](../../models/components/taxbehavioroption.md)                           | :heavy_minus_sign:                                                                                     | The tax behavior of the price. If not set, it will default to the organization's default tax behavior. |