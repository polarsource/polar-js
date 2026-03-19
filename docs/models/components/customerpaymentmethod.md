# CustomerPaymentMethod


## Supported Types

### `components.PaymentMethodCard`

```typescript
const value: components.PaymentMethodCard = {
  id: "<value>",
  createdAt: new Date("2025-02-23T15:23:31.500Z"),
  modifiedAt: new Date("2025-11-29T12:48:39.365Z"),
  processor: "stripe",
  customerId: "<value>",
  type: "card",
  methodMetadata: {
    brand: "<value>",
    last4: "<value>",
    expMonth: 438108,
    expYear: 447179,
  },
};
```

### `components.PaymentMethodGeneric`

```typescript
const value: components.PaymentMethodGeneric = {
  id: "<value>",
  createdAt: new Date("2026-04-30T09:20:24.064Z"),
  modifiedAt: new Date("2025-10-03T20:55:19.525Z"),
  processor: "stripe",
  customerId: "<value>",
  type: "<value>",
};
```

