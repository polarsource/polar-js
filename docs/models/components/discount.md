# Discount


## Supported Types

### `components.DiscountFixedOnceForeverDuration`

```typescript
const value: components.DiscountFixedOnceForeverDuration = {
  duration: "forever",
  type: "fixed",
  amount: 1000,
  currency: "usd",
  amounts: {
    "eur": 900,
    "usd": 1000,
  },
  createdAt: new Date("2026-01-21T02:26:58.975Z"),
  modifiedAt: new Date("2026-08-26T23:24:22.141Z"),
  id: "<value>",
  metadata: {
    "key": 5247.88,
  },
  name: "<value>",
  code: null,
  startsAt: new Date("2025-07-10T21:11:23.781Z"),
  endsAt: new Date("2024-05-19T23:49:44.658Z"),
  maxRedemptions: 58410,
  maxRedemptionsPerCustomer: 45660,
  redemptionsCount: 57132,
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [],
};
```

### `components.DiscountFixedRepeatDuration`

```typescript
const value: components.DiscountFixedRepeatDuration = {
  duration: "repeating",
  durationInMonths: 311967,
  type: "fixed",
  amount: 1000,
  currency: "usd",
  amounts: {
    "eur": 900,
    "usd": 1000,
  },
  createdAt: new Date("2025-09-09T05:22:20.302Z"),
  modifiedAt: new Date("2024-02-15T15:13:22.827Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  name: "<value>",
  code: "<value>",
  startsAt: new Date("2025-01-12T16:02:29.532Z"),
  endsAt: new Date("2024-11-24T04:10:44.032Z"),
  maxRedemptions: null,
  maxRedemptionsPerCustomer: 211553,
  redemptionsCount: 173121,
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      metadata: {},
      id: "<value>",
      createdAt: new Date("2024-02-05T00:21:18.363Z"),
      modifiedAt: new Date("2026-07-04T11:58:51.297Z"),
      trialInterval: "month",
      trialIntervalCount: 4883,
      name: "<value>",
      description: "youthful upon alert entire meanwhile lest partridge",
      visibility: "private",
      recurringInterval: "month",
      recurringIntervalCount: 340336,
      meterInterval: "month",
      meterIntervalCount: 112279,
      isRecurring: false,
      isArchived: true,
      organizationId: "<value>",
    },
  ],
};
```

### `components.DiscountPercentageOnceForeverDuration`

```typescript
const value: components.DiscountPercentageOnceForeverDuration = {
  duration: "repeating",
  type: "fixed",
  basisPoints: 1000,
  createdAt: new Date("2024-11-05T17:56:21.046Z"),
  modifiedAt: new Date("2024-05-16T21:52:37.548Z"),
  id: "<value>",
  metadata: {
    "key": 713621,
  },
  name: "<value>",
  code: "<value>",
  startsAt: null,
  endsAt: new Date("2024-12-13T00:06:50.256Z"),
  maxRedemptions: 195391,
  maxRedemptionsPerCustomer: 904519,
  redemptionsCount: 788473,
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [],
};
```

### `components.DiscountPercentageRepeatDuration`

```typescript
const value: components.DiscountPercentageRepeatDuration = {
  duration: "once",
  durationInMonths: 546953,
  type: "percentage",
  basisPoints: 1000,
  createdAt: new Date("2024-03-14T21:43:18.089Z"),
  modifiedAt: new Date("2026-06-10T06:05:11.023Z"),
  id: "<value>",
  metadata: {},
  name: "<value>",
  code: "<value>",
  startsAt: new Date("2026-01-22T14:00:25.247Z"),
  endsAt: new Date("2026-07-28T07:07:35.338Z"),
  maxRedemptions: 847336,
  maxRedemptionsPerCustomer: 138670,
  redemptionsCount: 508700,
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [],
};
```

