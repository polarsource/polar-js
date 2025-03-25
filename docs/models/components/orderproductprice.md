# ~~OrderProductPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2024-08-18T12:20:52.263Z"),
  modifiedAt: new Date("2025-03-21T15:17:35.920Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "year",
  priceCurrency: "<value>",
  priceAmount: 277990,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2024-12-24T07:51:55.110Z"),
  modifiedAt: new Date("2024-09-27T22:34:37.039Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  unitAmount: 36691,
  includedUnits: 147400,
  capAmount: 756287,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
  },
};
```

