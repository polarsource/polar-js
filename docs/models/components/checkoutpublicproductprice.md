# CheckoutPublicProductPrice

Price of the selected product.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2024-02-18T08:34:01.840Z"),
  modifiedAt: new Date("2023-01-20T05:07:04.882Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 651003,
  maximumAmount: 123137,
  presetAmount: 661356,
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2025-08-10T19:52:48.916Z"),
  modifiedAt: new Date("2023-06-22T12:08:25.495Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "year",
  priceCurrency: "<value>",
  unitAmount: 729926,
  includedUnits: 866387,
  capAmount: 386893,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
  },
};
```

