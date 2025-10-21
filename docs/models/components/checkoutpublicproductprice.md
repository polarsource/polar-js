# CheckoutPublicProductPrice

Price of the selected product.


## Supported Types

### `components.LegacyRecurringProductPriceOutput`

```typescript
const value: components.LegacyRecurringProductPriceOutput = {
  createdAt: new Date("2024-02-21T03:40:23.245Z"),
  modifiedAt: null,
  id: "<value>",
  amountType: "custom",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 714639,
  maximumAmount: 632380,
  presetAmount: 459918,
  legacy: true,
};
```

### `components.ProductPriceOutput`

```typescript
const value: components.ProductPriceOutput = {
  createdAt: new Date("2024-04-20T08:56:48.445Z"),
  modifiedAt: new Date("2025-12-01T06:09:25.237Z"),
  id: "<value>",
  amountType: "fixed",
  isArchived: true,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  priceCurrency: "<value>",
  priceAmount: 965900,
};
```

