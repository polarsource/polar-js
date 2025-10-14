# ProductPriceSeatTiers

List of pricing tiers for seat-based pricing.

## Example Usage

```typescript
import { ProductPriceSeatTiers } from "@polar-sh/sdk/models/components/productpriceseattiers.js";

let value: ProductPriceSeatTiers = {
  tiers: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `tiers`                                                                              | [components.ProductPriceSeatTier](../../models/components/productpriceseattier.md)[] | :heavy_check_mark:                                                                   | List of pricing tiers                                                                |