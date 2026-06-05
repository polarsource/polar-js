# OrdersFinalizeResponse402OrdersFinalize

The charge failed, or requires customer authentication (e.g. a 3DS challenge) that can't be completed off-session.


## Supported Types

### `errors.PaymentFailed`

```typescript
const value: errors.PaymentFailed = {
  error: "PaymentFailed",
  detail: "<value>",
};
```

### `errors.PaymentActionRequired`

```typescript
const value: errors.PaymentActionRequired = {
  error: "PaymentActionRequired",
  detail: "<value>",
};
```

