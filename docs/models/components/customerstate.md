# CustomerState


## Supported Types

### `components.CustomerStateIndividual`

```typescript
const value: components.CustomerStateIndividual = {
  id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
  createdAt: new Date("2026-07-06T21:29:59.771Z"),
  modifiedAt: new Date("2026-04-08T08:45:31.345Z"),
  metadata: {},
  externalId: "usr_1337",
  email: "customer@example.com",
  emailVerified: true,
  type: "individual",
  name: "John Doe",
  billingAddress: {
    country: "US",
  },
  taxId: [
    "911144442",
    "us_ein",
  ],
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  deletedAt: new Date("2024-12-12T04:56:33.080Z"),
  activeSubscriptions: [
    {
      id: "e5149aae-e521-42b9-b24c-abb3d71eea2e",
      createdAt: new Date("2026-02-15T23:44:26.685Z"),
      modifiedAt: new Date("2026-12-13T10:49:06.652Z"),
      metadata: {},
      status: "active",
      amount: 1000,
      currency: "usd",
      recurringInterval: "day",
      currentPeriodStart: new Date("2025-02-03T13:37:00Z"),
      currentPeriodEnd: new Date("2025-03-03T13:37:00Z"),
      trialStart: new Date("2025-02-03T13:37:00Z"),
      trialEnd: new Date("2025-03-03T13:37:00Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2026-01-18T04:18:40.136Z"),
      startedAt: new Date("2025-01-03T13:37:00Z"),
      endsAt: new Date("2026-01-30T07:36:24.970Z"),
      productId: "d8dd2de1-21b7-4a41-8bc3-ce909c0cfe23",
      discountId: "<value>",
      meters: [
        {
          createdAt: new Date("2026-08-06T03:58:23.691Z"),
          modifiedAt: new Date("2026-11-29T18:34:09.927Z"),
          id: "<value>",
          consumedUnits: 25,
          creditedUnits: 100,
          amount: 0,
          meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        },
      ],
    },
  ],
  grantedBenefits: [
    {
      id: "d322132c-a9d0-4e0d-b8d3-d81ad021a3a9",
      createdAt: new Date("2025-03-23T16:30:46.933Z"),
      modifiedAt: new Date("2026-05-27T23:44:19.476Z"),
      grantedAt: new Date("2025-01-03T13:37:00Z"),
      benefitId: "397a17aa-15cf-4cb4-9333-18040203cf98",
      benefitType: "license_keys",
      benefitMetadata: {},
      properties: {},
    },
  ],
  activeMeters: [
    {
      id: "<value>",
      createdAt: new Date("2025-06-05T04:48:53.147Z"),
      modifiedAt: new Date("2024-10-20T13:06:23.129Z"),
      meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
      consumedUnits: 25,
      creditedUnits: 100,
      balance: 75,
    },
  ],
  avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
};
```

### `components.CustomerStateTeam`

```typescript
const value: components.CustomerStateTeam = {
  id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
  createdAt: new Date("2026-06-19T14:51:51.498Z"),
  modifiedAt: new Date("2026-10-12T02:25:21.071Z"),
  metadata: {},
  externalId: "usr_1337",
  email: "customer@example.com",
  emailVerified: true,
  type: "team",
  name: "John Doe",
  billingAddress: {
    country: "US",
  },
  taxId: [
    "911144442",
    "us_ein",
  ],
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  deletedAt: null,
  activeSubscriptions: [
    {
      id: "e5149aae-e521-42b9-b24c-abb3d71eea2e",
      createdAt: new Date("2026-02-15T23:44:26.685Z"),
      modifiedAt: new Date("2026-12-13T10:49:06.652Z"),
      metadata: {},
      status: "active",
      amount: 1000,
      currency: "usd",
      recurringInterval: "day",
      currentPeriodStart: new Date("2025-02-03T13:37:00Z"),
      currentPeriodEnd: new Date("2025-03-03T13:37:00Z"),
      trialStart: new Date("2025-02-03T13:37:00Z"),
      trialEnd: new Date("2025-03-03T13:37:00Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2026-01-18T04:18:40.136Z"),
      startedAt: new Date("2025-01-03T13:37:00Z"),
      endsAt: new Date("2026-01-30T07:36:24.970Z"),
      productId: "d8dd2de1-21b7-4a41-8bc3-ce909c0cfe23",
      discountId: "<value>",
      meters: [
        {
          createdAt: new Date("2026-08-06T03:58:23.691Z"),
          modifiedAt: new Date("2026-11-29T18:34:09.927Z"),
          id: "<value>",
          consumedUnits: 25,
          creditedUnits: 100,
          amount: 0,
          meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        },
      ],
    },
  ],
  grantedBenefits: [
    {
      id: "d322132c-a9d0-4e0d-b8d3-d81ad021a3a9",
      createdAt: new Date("2025-03-23T16:30:46.933Z"),
      modifiedAt: new Date("2026-05-27T23:44:19.476Z"),
      grantedAt: new Date("2025-01-03T13:37:00Z"),
      benefitId: "397a17aa-15cf-4cb4-9333-18040203cf98",
      benefitType: "license_keys",
      benefitMetadata: {},
      properties: {},
    },
  ],
  activeMeters: [],
  avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
};
```

