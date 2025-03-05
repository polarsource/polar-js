# ~~CheckoutLinkProductPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2024-07-22T08:29:55.275Z"),
  modifiedAt: new Date("2025-10-30T06:10:40.764Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "year",
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2023-06-02T10:01:08.885Z"),
  modifiedAt: new Date("2024-09-17T15:00:06.389Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 433878,
  maximumAmount: 653738,
  presetAmount: 617330,
};
```

