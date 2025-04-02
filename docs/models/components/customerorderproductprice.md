# ~~CustomerOrderProductPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2024-12-06T01:55:26.518Z"),
  modifiedAt: new Date("2024-08-09T23:30:03.418Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 554550,
  maximumAmount: 987633,
  presetAmount: 981642,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2025-05-17T21:20:13.788Z"),
  modifiedAt: new Date("2025-04-19T15:54:08.667Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 927802,
  maximumAmount: 376776,
  presetAmount: 713325,
};
```

