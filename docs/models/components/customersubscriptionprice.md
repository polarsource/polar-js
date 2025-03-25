# ~~CustomerSubscriptionPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2024-09-21T14:30:07.308Z"),
  modifiedAt: new Date("2025-01-01T06:51:40.408Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 252144,
  maximumAmount: 518855,
  presetAmount: 337514,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2024-06-11T10:03:01.658Z"),
  modifiedAt: new Date("2024-09-17T07:49:46.907Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  priceCurrency: "<value>",
  unitAmount: 895939,
  includedUnits: 987408,
  capAmount: 240387,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
  },
};
```

