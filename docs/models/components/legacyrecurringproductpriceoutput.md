# LegacyRecurringProductPriceOutput


## Supported Types

### `components.LegacyRecurringProductPriceCustomOutput`

```typescript
const value: components.LegacyRecurringProductPriceCustomOutput = {
  createdAt: new Date("2023-10-03T20:20:14.526Z"),
  modifiedAt: new Date("2024-01-11T17:11:49.461Z"),
  id: "<value>",
  amountType: "custom",
  isArchived: true,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 725239,
  maximumAmount: 27371,
  presetAmount: 931055,
  legacy: true,
};
```

### `components.LegacyRecurringProductPriceFixedOutput`

```typescript
const value: components.LegacyRecurringProductPriceFixedOutput = {
  createdAt: new Date("2023-06-22T14:45:25.863Z"),
  modifiedAt: null,
  id: "<value>",
  amountType: "fixed",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "week",
  priceCurrency: "<value>",
  priceAmount: 497545,
  legacy: true,
};
```

### `components.LegacyRecurringProductPriceFreeOutput`

```typescript
const value: components.LegacyRecurringProductPriceFreeOutput = {
  createdAt: new Date("2024-11-24T00:49:35.245Z"),
  modifiedAt: new Date("2025-07-30T21:59:30.608Z"),
  id: "<value>",
  amountType: "free",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  legacy: true,
};
```

