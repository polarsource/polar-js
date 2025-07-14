# SystemEvent


## Supported Types

### `components.BenefitCycledEvent`

```typescript
const value: components.BenefitCycledEvent = {
  id: "<value>",
  timestamp: new Date("2025-08-07T21:09:06.819Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-07-12T03:53:00.913Z"),
    modifiedAt: new Date("2024-04-26T10:19:45.222Z"),
    metadata: {
      "key": 5951.8,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-07-29T02:37:49.390Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "discord",
  },
};
```

### `components.BenefitGrantedEvent`

```typescript
const value: components.BenefitGrantedEvent = {
  id: "<value>",
  timestamp: new Date("2025-06-01T19:12:32.636Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-07-12T03:53:00.913Z"),
    modifiedAt: new Date("2024-04-26T10:19:45.222Z"),
    metadata: {
      "key": 5951.8,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-07-29T02:37:49.390Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "discord",
  },
};
```

### `components.BenefitRevokedEvent`

```typescript
const value: components.BenefitRevokedEvent = {
  id: "<value>",
  timestamp: new Date("2023-07-28T03:11:06.121Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-07-12T03:53:00.913Z"),
    modifiedAt: new Date("2024-04-26T10:19:45.222Z"),
    metadata: {
      "key": 5951.8,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-07-29T02:37:49.390Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "discord",
  },
};
```

### `components.BenefitUpdatedEvent`

```typescript
const value: components.BenefitUpdatedEvent = {
  id: "<value>",
  timestamp: new Date("2023-08-28T11:47:00.673Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-07-12T03:53:00.913Z"),
    modifiedAt: new Date("2024-04-26T10:19:45.222Z"),
    metadata: {
      "key": 5951.8,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-07-29T02:37:49.390Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "discord",
  },
};
```

### `components.MeterCreditEvent`

```typescript
const value: components.MeterCreditEvent = {
  id: "<value>",
  timestamp: new Date("2023-07-17T16:23:37.725Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-07-12T03:53:00.913Z"),
    modifiedAt: new Date("2024-04-26T10:19:45.222Z"),
    metadata: {
      "key": 5951.8,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-07-29T02:37:49.390Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  metadata: {
    meterId: "<id>",
    units: 232955,
    rollover: true,
  },
};
```

### `components.MeterResetEvent`

```typescript
const value: components.MeterResetEvent = {
  id: "<value>",
  timestamp: new Date("2025-08-06T05:06:15.094Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-07-12T03:53:00.913Z"),
    modifiedAt: new Date("2024-04-26T10:19:45.222Z"),
    metadata: {
      "key": 5951.8,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-07-29T02:37:49.390Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  metadata: {
    meterId: "<id>",
  },
};
```

