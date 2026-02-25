# ProductPriceSeatTiersInput

List of pricing tiers for seat-based pricing.

The minimum and maximum seat limits are derived from the tiers:
- minimum_seats = first tier's min_seats
- maximum_seats = last tier's max_seats (None for unlimited)

## Example Usage

```typescript
import { ProductPriceSeatTiersInput } from "@polar-sh/sdk/models/components/productpriceseattiersinput.js";

let value: ProductPriceSeatTiersInput = {
  tiers: [
    {
      minSeats: 675666,
      pricePerSeat: 558084,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `tiers`                                                                              | [components.ProductPriceSeatTier](../../models/components/productpriceseattier.md)[] | :heavy_check_mark:                                                                   | List of pricing tiers                                                                |