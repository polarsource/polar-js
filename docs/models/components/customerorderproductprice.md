# ~~CustomerOrderProductPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2024-06-28T11:49:18.398Z"),
  modifiedAt: new Date("2023-05-05T12:03:21.760Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "year",
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2024-10-30T03:11:08.559Z"),
  modifiedAt: new Date("2025-12-04T04:19:44.915Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 907834,
  maximumAmount: 895473,
  presetAmount: 455838,
};
```

