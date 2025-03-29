# DiscountCreate


## Supported Types

### `components.DiscountFixedOnceForeverDurationCreate`

```typescript
const value: components.DiscountFixedOnceForeverDurationCreate = {
  duration: "forever",
  type: "fixed",
  amount: 724676,
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

### `components.DiscountFixedRepeatDurationCreate`

```typescript
const value: components.DiscountFixedRepeatDurationCreate = {
  duration: "once",
  durationInMonths: 305662,
  type: "fixed",
  amount: 747290,
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

### `components.DiscountPercentageOnceForeverDurationCreate`

```typescript
const value: components.DiscountPercentageOnceForeverDurationCreate = {
  duration: "repeating",
  type: "fixed",
  basisPoints: 561677,
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

### `components.DiscountPercentageRepeatDurationCreate`

```typescript
const value: components.DiscountPercentageRepeatDurationCreate = {
  duration: "repeating",
  durationInMonths: 871210,
  type: "percentage",
  basisPoints: 258996,
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

