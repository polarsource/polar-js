# ~~CustomerOrderProductPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2024-02-29T05:46:31.262Z"),
  modifiedAt: new Date("2023-08-31T18:46:56.958Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 964786,
  maximumAmount: 34675,
  presetAmount: 550733,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2024-01-01T21:33:09.750Z"),
  modifiedAt: new Date("2023-09-24T08:14:03.791Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
};
```

