# ~~CustomerOrderProductPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2024-01-19T12:24:53.517Z"),
  modifiedAt: new Date("2023-08-12T12:52:39.076Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 569477,
  maximumAmount: 779581,
  presetAmount: 695515,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2023-06-22T15:02:43.515Z"),
  modifiedAt: new Date("2025-09-17T15:39:07.023Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  priceCurrency: "<value>",
  priceAmount: 23427,
};
```

