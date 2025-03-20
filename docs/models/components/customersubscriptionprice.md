# ~~CustomerSubscriptionPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2025-07-01T18:33:39.424Z"),
  modifiedAt: new Date("2024-09-10T21:36:58.913Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "year",
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2024-07-01T15:28:38.660Z"),
  modifiedAt: new Date("2023-03-31T02:34:43.087Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 853453,
  maximumAmount: 594157,
  presetAmount: 905366,
};
```

