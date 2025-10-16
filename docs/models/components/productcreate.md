# ProductCreate


## Supported Types

### `components.ProductCreateRecurring`

```typescript
const value: components.ProductCreateRecurring = {
  name: "<value>",
  prices: [
    {
      amountType: "metered_unit",
      meterId: "<value>",
      priceCurrency: "usd",
      unitAmount: "<value>",
    },
  ],
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  recurringInterval: "month",
};
```

### `components.ProductCreateOneTime`

```typescript
const value: components.ProductCreateOneTime = {
  name: "<value>",
  prices: [
    {
      amountType: "custom",
      priceCurrency: "usd",
    },
  ],
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

