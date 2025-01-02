# ProductPriceOneTimeFixedCreate

Schema to create a one-time product price.

## Example Usage

```typescript
import { ProductPriceOneTimeFixedCreate } from "@polar-sh/sdk/models/components";

let value: ProductPriceOneTimeFixedCreate = {
  priceAmount: 217682,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `type`                                            | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `amountType`                                      | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `priceAmount`                                     | *number*                                          | :heavy_check_mark:                                | The price in cents.                               |
| `priceCurrency`                                   | *string*                                          | :heavy_minus_sign:                                | The currency. Currently, only `usd` is supported. |