# ~~Price~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2023-10-09T15:28:56.919Z"),
  modifiedAt: new Date("2023-10-20T14:32:02.541Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "year",
  priceCurrency: "<value>",
  priceAmount: 623867,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2023-01-12T14:26:50.258Z"),
  modifiedAt: new Date("2025-11-23T13:27:52.601Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 41346,
  maximumAmount: 530199,
  presetAmount: 951411,
};
```

