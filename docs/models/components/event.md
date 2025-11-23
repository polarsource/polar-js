# Event


## Supported Types

### `components.SystemEvent`

```typescript
const value: components.SystemEvent = {
  id: "<value>",
  timestamp: new Date("2024-08-13T08:55:32.873Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-03-11T16:11:12.405Z"),
    modifiedAt: new Date("2024-05-26T23:55:45.640Z"),
    metadata: {},
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
    deletedAt: new Date("2024-09-12T11:45:35.154Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  childCount: 0,
  label: "<value>",
  source: "system",
  name: "meter.reset",
  metadata: {
    meterId: "<id>",
  },
};
```

### `components.UserEvent`

```typescript
const value: components.UserEvent = {
  id: "<value>",
  timestamp: new Date("2025-05-06T21:56:49.639Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-03-11T16:11:12.405Z"),
    modifiedAt: new Date("2024-05-26T23:55:45.640Z"),
    metadata: {},
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
    deletedAt: new Date("2024-09-12T11:45:35.154Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  name: "<value>",
  source: "user",
  metadata: {},
};
```

