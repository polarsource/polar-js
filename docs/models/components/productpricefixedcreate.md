# ProductPriceFixedCreate

Schema to create a fixed price.

## Example Usage

```typescript
import { ProductPriceFixedCreate } from "@polar-sh/sdk/models/components/productpricefixedcreate.js";

let value: ProductPriceFixedCreate = {
  priceAmount: 225621,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `amountType`                                      | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `priceAmount`                                     | *number*                                          | :heavy_check_mark:                                | The price in cents.                               |
| `priceCurrency`                                   | *string*                                          | :heavy_minus_sign:                                | The currency. Currently, only `usd` is supported. |