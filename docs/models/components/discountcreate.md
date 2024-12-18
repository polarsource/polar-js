# DiscountCreate


## Supported Types

### `components.DiscountFixedOnceForeverDurationCreate`

```typescript
const value: components.DiscountFixedOnceForeverDurationCreate = {
  duration: "forever",
  type: "fixed",
  amount: 44740,
  name: "<value>",
};
```

### `components.DiscountFixedRepeatDurationCreate`

```typescript
const value: components.DiscountFixedRepeatDurationCreate = {
  duration: "once",
  durationInMonths: 350470,
  type: "fixed",
  amount: 706735,
  name: "<value>",
};
```

### `components.DiscountPercentageOnceForeverDurationCreate`

```typescript
const value: components.DiscountPercentageOnceForeverDurationCreate = {
  duration: "repeating",
  type: "percentage",
  basisPoints: 942754,
  name: "<value>",
};
```

### `components.DiscountPercentageRepeatDurationCreate`

```typescript
const value: components.DiscountPercentageRepeatDurationCreate = {
  duration: "forever",
  durationInMonths: 593682,
  type: "fixed",
  basisPoints: 570826,
  name: "<value>",
};
```

