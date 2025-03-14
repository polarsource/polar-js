# ~~OrderProductPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2025-11-16T00:59:56.580Z"),
  modifiedAt: new Date("2025-11-24T10:40:28.013Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 617497,
  maximumAmount: 985379,
  presetAmount: 887284,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2023-12-10T16:41:14.824Z"),
  modifiedAt: new Date("2024-02-05T15:08:18.944Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "month",
};
```

