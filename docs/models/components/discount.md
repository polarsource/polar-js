# Discount


## Supported Types

### `components.DiscountFixedOnceForeverDuration`

```typescript
const value: components.DiscountFixedOnceForeverDuration = {
  duration: "forever",
  type: "fixed",
  amount: 1000,
  currency: "usd",
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
  redemptionsCount: 977582,
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
  redemptionsCount: 496351,
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [],
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
  redemptionsCount: 409445,
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      metadata: {
        "key": 168262,
      },
      id: "<value>",
      createdAt: new Date("2025-11-19T12:32:14.789Z"),
      modifiedAt: new Date("2024-04-09T12:42:12.296Z"),
      trialInterval: "year",
      trialIntervalCount: 718871,
      name: "<value>",
      description:
        "shinny psst cram usefully buttery aggressive bestride conservative sympathetically",
      visibility: "private",
      recurringInterval: "month",
      recurringIntervalCount: 280938,
      isRecurring: false,
      isArchived: true,
      organizationId: "<value>",
    },
  ],
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
  redemptionsCount: 132135,
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [],
};
```

