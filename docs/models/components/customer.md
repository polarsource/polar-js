# Customer


## Supported Types

### `components.CustomerIndividual`

```typescript
const value: components.CustomerIndividual = {
  id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
  createdAt: new Date("2025-02-09T18:45:42.435Z"),
  modifiedAt: null,
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
  deletedAt: new Date("2025-10-18T05:57:51.705Z"),
  avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
};
```

### `components.CustomerTeam`

```typescript
const value: components.CustomerTeam = {
  id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
  createdAt: new Date("2025-02-03T08:52:07.468Z"),
  modifiedAt: new Date("2026-11-19T04:02:41.641Z"),
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
  avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
};
```

