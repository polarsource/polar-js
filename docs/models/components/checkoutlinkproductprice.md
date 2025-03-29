# ~~CheckoutLinkProductPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2025-04-24T09:01:08.745Z"),
  modifiedAt: new Date("2025-12-11T00:30:42.283Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 397879,
  maximumAmount: 717730,
  presetAmount: 292174,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2024-07-21T04:52:15.720Z"),
  modifiedAt: new Date("2024-12-26T19:13:47.010Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "month",
};
```

