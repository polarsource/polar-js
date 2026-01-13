# CheckoutProductPrices


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2026-03-28T17:53:12.899Z"),
  modifiedAt: new Date("2026-10-27T07:25:25.401Z"),
  id: "<value>",
  source: "ad_hoc",
  amountType: "custom",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 193061,
  maximumAmount: null,
  presetAmount: 774085,
  legacy: true,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2024-11-11T09:36:50.641Z"),
  modifiedAt: null,
  id: "<value>",
  source: "ad_hoc",
  amountType: "metered_unit",
  isArchived: true,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "week",
  priceCurrency: "<value>",
  unitAmount: "<value>",
  capAmount: 29277,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
  },
};
```

