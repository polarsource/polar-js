# LegacyRecurringProductPrice


## Supported Types

### `components.LegacyRecurringProductPriceCustom`

```typescript
const value: components.LegacyRecurringProductPriceCustom = {
  createdAt: new Date("2024-12-07T03:04:39.121Z"),
  modifiedAt: new Date("2023-07-09T04:58:27.438Z"),
  id: "<value>",
  amountType: "custom",
  isArchived: true,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 96295,
  maximumAmount: 385918,
  presetAmount: 774449,
  legacy: true,
};
```

### `components.LegacyRecurringProductPriceFixed`

```typescript
const value: components.LegacyRecurringProductPriceFixed = {
  createdAt: new Date("2025-09-21T09:37:21.640Z"),
  modifiedAt: new Date("2023-07-31T14:55:29.344Z"),
  id: "<value>",
  amountType: "fixed",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  priceCurrency: "<value>",
  priceAmount: 555601,
  legacy: true,
};
```

### `components.LegacyRecurringProductPriceFree`

```typescript
const value: components.LegacyRecurringProductPriceFree = {
  createdAt: new Date("2024-05-26T22:02:46.951Z"),
  modifiedAt: new Date("2025-07-18T18:38:40.552Z"),
  id: "<value>",
  amountType: "free",
  isArchived: true,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  legacy: true,
};
```

