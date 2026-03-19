# ProductPriceSeatTiersOutput

List of pricing tiers for seat-based pricing.

The minimum and maximum seat limits are derived from the tiers:
- minimum_seats = first tier's min_seats
- maximum_seats = last tier's max_seats (None for unlimited)

## Example Usage

```typescript
import { ProductPriceSeatTiersOutput } from "@polar-sh/sdk/models/components/productpriceseattiersoutput.js";

let value: ProductPriceSeatTiersOutput = {
  tiers: [],
  minimumSeats: 956824,
  maximumSeats: null,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `tiers`                                                                                   | [components.ProductPriceSeatTier](../../models/components/productpriceseattier.md)[]      | :heavy_check_mark:                                                                        | List of pricing tiers                                                                     |
| `minimumSeats`                                                                            | *number*                                                                                  | :heavy_check_mark:                                                                        | Minimum number of seats required for purchase, derived from first tier.                   |
| `maximumSeats`                                                                            | *number*                                                                                  | :heavy_check_mark:                                                                        | Maximum number of seats allowed for purchase, derived from last tier. None for unlimited. |