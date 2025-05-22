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
    createdAt: new Date("2025-08-07T06:13:56.447Z"),
    modifiedAt: new Date("2025-11-06T03:25:09.078Z"),
    metadata: {
      "key": false,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "SE",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-04-22T13:09:01.674Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  externalCustomerId: "<id>",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "license_keys",
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
    createdAt: new Date("2025-03-21T07:47:56.812Z"),
    modifiedAt: new Date("2023-10-01T05:46:38.819Z"),
    metadata: {
      "key": 129350,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-01-20T03:19:00.486Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  externalCustomerId: "<id>",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "meter_credit",
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
    createdAt: new Date("2023-11-02T19:42:49.301Z"),
    modifiedAt: new Date("2024-09-03T08:37:30.499Z"),
    metadata: {
      "key": 323380,
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
    deletedAt: new Date("2023-03-10T16:31:09.424Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  externalCustomerId: "<id>",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "downloadables",
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
    createdAt: new Date("2024-05-05T15:55:36.615Z"),
    modifiedAt: new Date("2023-05-15T07:11:41.870Z"),
    metadata: {
      "key": 737808,
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
    deletedAt: new Date("2023-06-17T07:42:25.430Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  externalCustomerId: "<id>",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "custom",
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
    createdAt: new Date("2023-08-15T15:39:42.233Z"),
    modifiedAt: new Date("2024-01-01T15:11:12.843Z"),
    metadata: {
      "key": 2329.55,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-06-23T15:05:35.258Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  externalCustomerId: "<id>",
  metadata: {
    meterId: "<id>",
    units: 87738,
    rollover: false,
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
    createdAt: new Date("2023-12-30T13:06:02.570Z"),
    modifiedAt: new Date("2024-09-06T10:24:42.589Z"),
    metadata: {
      "key": 922862,
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
    deletedAt: new Date("2024-10-09T19:18:51.463Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  externalCustomerId: "<id>",
  metadata: {
    meterId: "<id>",
  },
};
```

