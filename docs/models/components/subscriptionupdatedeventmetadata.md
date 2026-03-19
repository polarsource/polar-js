# SubscriptionUpdatedEventMetadata


## Supported Types

### `components.SubscriptionUpdatedProductMetadata`

```typescript
const value: components.SubscriptionUpdatedProductMetadata = {
  subscriptionId: "<id>",
  productId: "<id>",
  prorationBehavior: "invoice",
};
```

### `components.SubscriptionUpdatedDiscountMetadata`

```typescript
const value: components.SubscriptionUpdatedDiscountMetadata = {
  subscriptionId: "<id>",
  discountId: null,
};
```

### `components.SubscriptionUpdatedTrialMetadata`

```typescript
const value: components.SubscriptionUpdatedTrialMetadata = {
  subscriptionId: "<id>",
  trialEnd: "<value>",
};
```

### `components.SubscriptionUpdatedSeatsMetadata`

```typescript
const value: components.SubscriptionUpdatedSeatsMetadata = {
  subscriptionId: "<id>",
  seats: 355196,
  prorationBehavior: "prorate",
};
```

### `components.SubscriptionUpdatedBillingPeriodMetadata`

```typescript
const value: components.SubscriptionUpdatedBillingPeriodMetadata = {
  subscriptionId: "<id>",
  billingPeriodEnd: "<value>",
};
```

