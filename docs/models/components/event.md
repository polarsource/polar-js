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
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  externalCustomerId: "<id>",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "discord",
  },
};
```

### `components.UserEvent`

```typescript
const value: components.UserEvent = {
  metadata: {
    "key": 455520,
  },
  id: "<value>",
  timestamp: new Date("2025-07-02T08:53:17.572Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: null,
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
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  externalCustomerId: "<id>",
  name: "<value>",
};
```

