# CustomerPaymentMethodCreateResponse


## Supported Types

### `components.CustomerPaymentMethodCreateRequiresActionResponse`

```typescript
const value: components.CustomerPaymentMethodCreateRequiresActionResponse = {
  status: "requires_action",
  clientSecret: "<value>",
};
```

### `components.CustomerPaymentMethodCreateSucceededResponse`

```typescript
const value: components.CustomerPaymentMethodCreateSucceededResponse = {
  status: "succeeded",
  paymentMethod: {
    id: "<value>",
    createdAt: new Date("2025-10-23T19:49:37.911Z"),
    modifiedAt: new Date("2024-09-25T15:17:52.236Z"),
    processor: "stripe",
    customerId: "<value>",
    type: "card",
    methodMetadata: {
      brand: "<value>",
      last4: "<value>",
      expMonth: 438108,
      expYear: 447179,
    },
  },
};
```

