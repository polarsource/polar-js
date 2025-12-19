# ProductPriceSeatBasedCreate

Schema to create a seat-based price with volume-based tiers.

## Example Usage

```typescript
import { ProductPriceSeatBasedCreate } from "@polar-sh/sdk/models/components/productpriceseatbasedcreate.js";

let value: ProductPriceSeatBasedCreate = {
  amountType: "seat_based",
  seatTiers: {
    tiers: [
      {
        minSeats: 415895,
        pricePerSeat: 164973,
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `amountType`                                                                         | *"seat_based"*                                                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `priceCurrency`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | The currency. Currently, only `usd` is supported.                                    |
| `seatTiers`                                                                          | [components.ProductPriceSeatTiers](../../models/components/productpriceseattiers.md) | :heavy_check_mark:                                                                   | List of pricing tiers for seat-based pricing.                                        |