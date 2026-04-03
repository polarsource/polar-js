# Event


## Supported Types

### `components.SystemEvent`

```typescript
const value: components.SystemEvent = {
  id: "<value>",
  timestamp: new Date("2025-08-13T08:55:32.873Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-12-27T14:09:22.680Z"),
    modifiedAt: new Date("2024-02-21T10:37:35.912Z"),
    metadata: {},
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
    deletedAt: new Date("2024-01-14T16:25:55.203Z"),
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
  timestamp: new Date("2026-05-06T21:56:49.639Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-03-19T23:58:45.367Z"),
    modifiedAt: new Date("2026-11-06T11:04:08.162Z"),
    metadata: {},
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
    deletedAt: new Date("2025-05-06T02:07:42.508Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  name: "<value>",
  source: "user",
  metadata: {},
};
```

