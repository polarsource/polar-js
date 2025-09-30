# ProductPriceSeatBasedCreate

Schema to create a seat-based price.

## Example Usage

```typescript
import { ProductPriceSeatBasedCreate } from "@polar-sh/sdk/models/components/productpriceseatbasedcreate.js";

let value: ProductPriceSeatBasedCreate = {
  amountType: "seat_based",
  pricePerSeat: 375262,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `amountType`                                      | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `priceCurrency`                                   | *string*                                          | :heavy_minus_sign:                                | The currency. Currently, only `usd` is supported. |
| `pricePerSeat`                                    | *number*                                          | :heavy_check_mark:                                | The price per seat in cents.                      |