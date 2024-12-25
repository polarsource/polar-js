# ProductPriceOneTimeCustomCreate

Schema to create a pay-what-you-want price for a one-time product.

## Example Usage

```typescript
import { ProductPriceOneTimeCustomCreate } from "@polar-sh/sdk/models/components";

let value: ProductPriceOneTimeCustomCreate = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `type`                                            | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `amountType`                                      | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `priceCurrency`                                   | *string*                                          | :heavy_minus_sign:                                | The currency. Currently, only `usd` is supported. |
| `minimumAmount`                                   | *number*                                          | :heavy_minus_sign:                                | The minimum amount the customer can pay.          |
| `maximumAmount`                                   | *number*                                          | :heavy_minus_sign:                                | The maximum amount the customer can pay.          |
| `presetAmount`                                    | *number*                                          | :heavy_minus_sign:                                | The initial amount shown to the customer.         |