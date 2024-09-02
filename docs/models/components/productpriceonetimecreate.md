# ProductPriceOneTimeCreate

Schema to create a one-time product price.

## Example Usage

```typescript
import { ProductPriceOneTimeCreate } from "@polar-sh/sdk/models/components";

let value: ProductPriceOneTimeCreate = {
    priceAmount: 589695,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [components.ProductPriceOneTimeCreateType](../../models/components/productpriceonetimecreatetype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `priceAmount`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | The price in cents.                                                                                  |
| `priceCurrency`                                                                                      | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The currency. Currently, only `usd` is supported.                                                    |