# CheckoutPublicDiscount


## Supported Types

### `components.CheckoutDiscountFixedOnceForeverDuration`

```typescript
const value: components.CheckoutDiscountFixedOnceForeverDuration = {
  duration: "forever",
  type: "percentage",
  amount: 1000,
  currency: "usd",
  id: "<value>",
  name: "<value>",
  code: "<value>",
};
```

### `components.CheckoutDiscountFixedRepeatDuration`

```typescript
const value: components.CheckoutDiscountFixedRepeatDuration = {
  duration: "once",
  durationInMonths: 856949,
  type: "fixed",
  amount: 1000,
  currency: "usd",
  id: "<value>",
  name: "<value>",
  code: "<value>",
};
```

### `components.CheckoutDiscountPercentageOnceForeverDuration`

```typescript
const value: components.CheckoutDiscountPercentageOnceForeverDuration = {
  duration: "forever",
  type: "percentage",
  basisPoints: 1000,
  id: "<value>",
  name: "<value>",
  code: "<value>",
};
```

### `components.CheckoutDiscountPercentageRepeatDuration`

```typescript
const value: components.CheckoutDiscountPercentageRepeatDuration = {
  duration: "once",
  durationInMonths: 606755,
  type: "fixed",
  basisPoints: 1000,
  id: "<value>",
  name: "<value>",
  code: "<value>",
};
```

