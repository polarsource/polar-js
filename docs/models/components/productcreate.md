# ProductCreate


## Supported Types

### `components.ProductCreateRecurring`

```typescript
const value: components.ProductCreateRecurring = {
  name: "<value>",
  prices: [
    {
      amountType: "free",
    },
  ],
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  recurringInterval: "year",
};
```

### `components.ProductCreateOneTime`

```typescript
const value: components.ProductCreateOneTime = {
  name: "<value>",
  prices: [
    {
      amountType: "fixed",
      priceAmount: 258011,
      priceCurrency: "usd",
    },
  ],
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

