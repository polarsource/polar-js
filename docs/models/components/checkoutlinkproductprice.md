# ~~CheckoutLinkProductPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2024-07-25T12:45:38.576Z"),
  modifiedAt: new Date("2024-05-29T19:48:45.859Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "year",
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2023-11-20T07:02:04.141Z"),
  modifiedAt: new Date("2025-03-31T06:44:53.428Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 208734,
  maximumAmount: 103387,
  presetAmount: 801576,
};
```

