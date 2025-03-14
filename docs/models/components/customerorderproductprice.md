# ~~CustomerOrderProductPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2025-05-01T09:46:08.628Z"),
  modifiedAt: new Date("2024-06-28T11:49:18.398Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 873718,
  maximumAmount: 395697,
  presetAmount: 609610,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2024-10-01T15:03:40.978Z"),
  modifiedAt: new Date("2024-07-10T20:33:26.772Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
};
```

