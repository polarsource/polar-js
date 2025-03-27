# ~~CheckoutLinkProductPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2023-06-04T17:46:37.810Z"),
  modifiedAt: new Date("2024-08-11T07:32:23.323Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "year",
  priceCurrency: "<value>",
  priceAmount: 989406,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2025-08-25T09:31:26.060Z"),
  modifiedAt: new Date("2024-09-13T23:01:39.762Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  priceCurrency: "<value>",
  unitAmount: 200931,
  includedUnits: 526045,
  capAmount: 531209,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
  },
};
```

