# ~~CheckoutLinkProductPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2024-04-22T09:01:31.581Z"),
  modifiedAt: new Date("2025-02-07T21:22:59.841Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "month",
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2024-07-02T20:33:44.163Z"),
  modifiedAt: new Date("2023-05-02T21:04:54.220Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "month",
  priceCurrency: "<value>",
  unitAmount: 34104,
  includedUnits: 349710,
  capAmount: 976341,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
  },
};
```

