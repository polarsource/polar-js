# Payment


## Supported Types

### `components.CardPayment`

```typescript
const value: components.CardPayment = {
  createdAt: new Date("2024-08-19T22:20:52.095Z"),
  modifiedAt: new Date("2024-02-13T06:48:23.838Z"),
  id: "<value>",
  processor: "stripe",
  status: "succeeded",
  amount: 1000,
  currency: "usd",
  method: "card",
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
  modifiedAt: new Date("2025-03-12T09:03:17.148Z"),
  id: "<value>",
  processor: "stripe",
  status: "succeeded",
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

