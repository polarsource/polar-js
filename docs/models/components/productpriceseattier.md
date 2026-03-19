# ProductPriceSeatTier

A pricing tier for seat-based pricing.

## Example Usage

```typescript
import { ProductPriceSeatTier } from "@polar-sh/sdk/models/components/productpriceseattier.js";

let value: ProductPriceSeatTier = {
  minSeats: 129448,
  pricePerSeat: 80044,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `minSeats`                                               | *number*                                                 | :heavy_check_mark:                                       | Minimum number of seats (inclusive)                      |
| `maxSeats`                                               | *number*                                                 | :heavy_minus_sign:                                       | Maximum number of seats (inclusive). None for unlimited. |
| `pricePerSeat`                                           | *number*                                                 | :heavy_check_mark:                                       | Price per seat in cents for this tier                    |