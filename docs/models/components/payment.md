# Payment


## Supported Types

### `components.CardPayment`

```typescript
const value: components.CardPayment = {
  createdAt: new Date("2024-08-19T22:20:52.095Z"),
  modifiedAt: new Date("2025-07-18T15:40:57.437Z"),
  id: "<value>",
  processor: "stripe",
  status: "succeeded",
  amount: 1000,
  currency: "usd",
  declineReason: "insufficient_funds",
  declineMessage: "Your card has insufficient funds.",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  checkoutId: "e4b478fa-cd25-4253-9f1f-8a41e6370ede",
  orderId: "e4b478fa-cd25-4253-9f1f-8a41e6370ede",
  methodMetadata: {
    brand: "visa",
    last4: "4242",
  },
};
```

### `components.GenericPayment`

```typescript
const value: components.GenericPayment = {
  createdAt: new Date("2025-02-18T21:30:37.361Z"),
  modifiedAt: new Date("2024-06-27T16:03:22.844Z"),
  id: "<value>",
  processor: "stripe",
  status: "failed",
  amount: 1000,
  currency: "usd",
  method: "card",
  declineReason: "insufficient_funds",
  declineMessage: "Your card has insufficient funds.",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  checkoutId: "e4b478fa-cd25-4253-9f1f-8a41e6370ede",
  orderId: "e4b478fa-cd25-4253-9f1f-8a41e6370ede",
};
```

