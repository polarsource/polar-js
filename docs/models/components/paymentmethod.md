# PaymentMethod


## Supported Types

### `components.CustomerPaymentMethodCard`

```typescript
const value: components.CustomerPaymentMethodCard = {
  id: "<value>",
  createdAt: new Date("2024-03-06T08:30:45.937Z"),
  modifiedAt: new Date("2025-07-10T11:26:44.086Z"),
  processor: "stripe",
  customerId: "<value>",
  type: "card",
  methodMetadata: {
    brand: "<value>",
    last4: "<value>",
    expMonth: 166298,
    expYear: 515575,
  },
  isDefault: true,
};
```

### `components.CustomerPaymentMethodGeneric`

```typescript
const value: components.CustomerPaymentMethodGeneric = {
  id: "<value>",
  createdAt: new Date("2026-04-23T03:04:54.094Z"),
  modifiedAt: new Date("2026-03-20T02:55:38.247Z"),
  processor: "stripe",
  customerId: "<value>",
  type: "<value>",
  isDefault: false,
};
```

