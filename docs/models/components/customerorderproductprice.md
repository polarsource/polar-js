# ~~CustomerOrderProductPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2023-11-09T07:17:45.765Z"),
  modifiedAt: new Date("2024-02-08T00:43:02.946Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 226019,
  maximumAmount: 515317,
  presetAmount: 991614,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2024-03-28T17:58:24.040Z"),
  modifiedAt: new Date("2023-11-08T09:32:49.355Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 669386,
  maximumAmount: 998684,
  presetAmount: 945277,
};
```

