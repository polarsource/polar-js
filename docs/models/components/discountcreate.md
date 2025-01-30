# DiscountCreate


## Supported Types

### `components.DiscountFixedOnceForeverDurationCreate`

```typescript
const value: components.DiscountFixedOnceForeverDurationCreate = {
  duration: "repeating",
  type: "percentage",
  amount: 5162,
  name: "<value>",
};
```

### `components.DiscountFixedRepeatDurationCreate`

```typescript
const value: components.DiscountFixedRepeatDurationCreate = {
  duration: "forever",
  durationInMonths: 29745,
  type: "percentage",
  amount: 240039,
  name: "<value>",
};
```

### `components.DiscountPercentageOnceForeverDurationCreate`

```typescript
const value: components.DiscountPercentageOnceForeverDurationCreate = {
  duration: "once",
  type: "fixed",
  basisPoints: 867773,
  name: "<value>",
};
```

### `components.DiscountPercentageRepeatDurationCreate`

```typescript
const value: components.DiscountPercentageRepeatDurationCreate = {
  duration: "once",
  durationInMonths: 742122,
  type: "percentage",
  basisPoints: 862722,
  name: "<value>",
};
```

