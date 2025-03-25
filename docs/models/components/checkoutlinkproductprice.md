# ~~CheckoutLinkProductPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2025-03-25T14:19:00.405Z"),
  modifiedAt: new Date("2024-09-02T05:10:29.477Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 413557,
  maximumAmount: 628156,
  presetAmount: 917050,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2024-02-29T19:48:02.801Z"),
  modifiedAt: new Date("2024-01-31T22:45:45.666Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 230161,
  maximumAmount: 554412,
  presetAmount: 781342,
};
```

