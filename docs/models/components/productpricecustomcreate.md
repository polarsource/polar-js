# ProductPriceCustomCreate

Schema to create a pay-what-you-want price.

## Example Usage

```typescript
import { ProductPriceCustomCreate } from "@polar-sh/sdk/models/components/productpricecustomcreate.js";

let value: ProductPriceCustomCreate = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `amountType`                                      | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `priceCurrency`                                   | *string*                                          | :heavy_minus_sign:                                | The currency. Currently, only `usd` is supported. |
| `minimumAmount`                                   | *number*                                          | :heavy_minus_sign:                                | The minimum amount the customer can pay.          |
| `maximumAmount`                                   | *number*                                          | :heavy_minus_sign:                                | The maximum amount the customer can pay.          |
| `presetAmount`                                    | *number*                                          | :heavy_minus_sign:                                | The initial amount shown to the customer.         |