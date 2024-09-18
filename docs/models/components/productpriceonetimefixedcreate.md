# ProductPriceOneTimeFixedCreate

Schema to create a one-time product price.

## Example Usage

```typescript
import { ProductPriceOneTimeFixedCreate } from "@polar-sh/sdk/models/components";

let value: ProductPriceOneTimeFixedCreate = {
  priceAmount: 309251,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [components.ProductPriceOneTimeFixedCreateType](../../models/components/productpriceonetimefixedcreatetype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `priceCurrency`                                                                                                | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The currency. Currently, only `usd` is supported.                                                              |
| `priceAmount`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The price in cents.                                                                                            |