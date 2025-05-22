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
    createdAt: new Date("2024-09-16T05:11:45.866Z"),
    modifiedAt: new Date("2025-10-18T03:37:22.969Z"),
    metadata: {
      "key": false,
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
    deletedAt: new Date("2023-02-21T10:37:35.912Z"),
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
    "key": false,
  },
  id: "<value>",
  timestamp: new Date("2024-04-21T07:22:46.611Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-05-14T05:59:46.885Z"),
    modifiedAt: new Date("2025-07-02T08:53:17.572Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "FR",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-04-09T05:54:19.467Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  externalCustomerId: "<id>",
  name: "<value>",
};
```

