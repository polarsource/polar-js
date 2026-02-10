# LegacyRecurringProductPrice


## Supported Types

### `components.LegacyRecurringProductPriceCustom`

```typescript
const value: components.LegacyRecurringProductPriceCustom = {
  createdAt: new Date("2025-12-07T03:04:39.121Z"),
  modifiedAt: new Date("2024-07-08T04:58:27.438Z"),
  id: "<value>",
  source: "catalog",
  amountType: "custom",
  priceCurrency: "usd",
  isArchived: true,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "day",
  minimumAmount: 96295,
  maximumAmount: 385918,
  presetAmount: 774449,
  legacy: true,
};
```

### `components.LegacyRecurringProductPriceFixed`

```typescript
const value: components.LegacyRecurringProductPriceFixed = {
  createdAt: new Date("2026-09-21T09:37:21.640Z"),
  modifiedAt: new Date("2024-07-30T14:55:29.344Z"),
  id: "<value>",
  source: "ad_hoc",
  amountType: "fixed",
  priceCurrency: "usd",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  priceAmount: 905396,
  legacy: true,
};
```

### `components.LegacyRecurringProductPriceFree`

```typescript
const value: components.LegacyRecurringProductPriceFree = {
  createdAt: new Date("2025-05-26T22:02:46.951Z"),
  modifiedAt: new Date("2026-07-18T18:38:40.552Z"),
  id: "<value>",
  source: "catalog",
  amountType: "free",
  priceCurrency: "usd",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "week",
  legacy: true,
};
```

