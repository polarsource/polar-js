# DiscountCreate


## Supported Types

### `components.DiscountFixedOnceForeverDurationCreate`

```typescript
const value: components.DiscountFixedOnceForeverDurationCreate = {
  duration: "repeating",
  type: "percentage",
  amount: 180202,
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

### `components.DiscountFixedRepeatDurationCreate`

```typescript
const value: components.DiscountFixedRepeatDurationCreate = {
  duration: "forever",
  durationInMonths: 37600,
  type: "fixed",
  amount: 996268,
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

### `components.DiscountPercentageOnceForeverDurationCreate`

```typescript
const value: components.DiscountPercentageOnceForeverDurationCreate = {
  duration: "forever",
  type: "fixed",
  basisPoints: 196172,
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

### `components.DiscountPercentageRepeatDurationCreate`

```typescript
const value: components.DiscountPercentageRepeatDurationCreate = {
  duration: "repeating",
  durationInMonths: 705753,
  type: "fixed",
  basisPoints: 771227,
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

