# ~~Price~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2025-12-10T06:06:11.956Z"),
  modifiedAt: new Date("2024-04-08T04:20:07.375Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "month",
  priceCurrency: "<value>",
  priceAmount: 821672,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2025-01-17T19:55:06.009Z"),
  modifiedAt: new Date("2025-06-02T01:11:39.479Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 124796,
  maximumAmount: 580248,
  presetAmount: 897434,
};
```

