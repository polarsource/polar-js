# ~~Price~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2023-09-17T23:02:09.893Z"),
  modifiedAt: new Date("2023-07-21T02:54:05.406Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 535883,
  maximumAmount: 667634,
  presetAmount: 820462,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2023-12-24T05:06:11.927Z"),
  modifiedAt: new Date("2025-02-15T08:42:30.471Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "month",
  priceCurrency: "<value>",
  priceAmount: 434955,
};
```

