# Discount


## Supported Types

### `components.DiscountFixedOnceForeverDuration`

```typescript
const value: components.DiscountFixedOnceForeverDuration = {
  duration: "forever",
  type: "fixed",
  amount: 685312,
  currency: "Bhutanese Ngultrum",
  createdAt: new Date("2025-08-26T23:24:22.141Z"),
  modifiedAt: new Date("2024-11-23T08:26:56.728Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  name: "<value>",
  code: "<value>",
  startsAt: new Date("2024-02-16T17:23:12.468Z"),
  endsAt: new Date("2024-06-16T05:41:15.397Z"),
  maxRedemptions: null,
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
  amount: 563161,
  currency: "Tala",
  createdAt: new Date("2023-02-15T15:13:22.827Z"),
  modifiedAt: new Date("2025-08-25T16:06:20.303Z"),
  id: "<value>",
  metadata: {
    "key": 101203,
  },
  name: "<value>",
  code: "<value>",
  startsAt: new Date("2023-11-25T04:10:44.032Z"),
  endsAt: null,
  maxRedemptions: 211553,
  redemptionsCount: 173121,
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      metadata: {},
      createdAt: new Date("2023-02-05T00:21:18.363Z"),
      modifiedAt: new Date("2025-07-04T11:58:51.297Z"),
      id: "<value>",
      name: "<value>",
      description:
        "lively trained clear-cut wonderfully brightly unfortunate because peppery",
      recurringInterval: "month",
      isRecurring: true,
      isArchived: false,
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
  basisPoints: 282616,
  createdAt: new Date("2023-09-27T01:14:07.480Z"),
  modifiedAt: new Date("2024-12-31T08:35:11.300Z"),
  id: "<value>",
  metadata: {},
  name: "<value>",
  code: "<value>",
  startsAt: new Date("2023-01-29T05:24:43.583Z"),
  endsAt: new Date("2023-12-14T00:06:50.256Z"),
  maxRedemptions: 195391,
  redemptionsCount: 409445,
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      metadata: {},
      createdAt: new Date("2023-02-05T00:21:18.363Z"),
      modifiedAt: new Date("2025-07-04T11:58:51.297Z"),
      id: "<value>",
      name: "<value>",
      description:
        "lively trained clear-cut wonderfully brightly unfortunate because peppery",
      recurringInterval: "month",
      isRecurring: true,
      isArchived: false,
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
  basisPoints: 67431,
  createdAt: new Date("2024-05-30T14:20:06.139Z"),
  modifiedAt: new Date("2024-01-12T04:13:03.718Z"),
  id: "<value>",
  metadata: {},
  name: "<value>",
  code: "<value>",
  startsAt: new Date("2023-06-22T00:34:36.762Z"),
  endsAt: new Date("2025-04-18T14:56:33.944Z"),
  maxRedemptions: 132135,
  redemptionsCount: 138670,
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      metadata: {},
      createdAt: new Date("2023-02-05T00:21:18.363Z"),
      modifiedAt: new Date("2025-07-04T11:58:51.297Z"),
      id: "<value>",
      name: "<value>",
      description:
        "lively trained clear-cut wonderfully brightly unfortunate because peppery",
      recurringInterval: "month",
      isRecurring: true,
      isArchived: false,
      organizationId: "<value>",
    },
  ],
};
```

