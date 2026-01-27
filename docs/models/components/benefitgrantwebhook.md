# BenefitGrantWebhook


## Supported Types

### `components.BenefitGrantDiscordWebhook`

```typescript
const value: components.BenefitGrantDiscordWebhook = {
  createdAt: new Date("2026-04-01T03:14:09.160Z"),
  modifiedAt: new Date("2025-07-28T13:13:39.901Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-06-04T21:28:32.740Z"),
    modifiedAt: new Date("2024-03-21T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
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
    deletedAt: new Date("2026-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2026-01-19T18:11:16.982Z"),
    modifiedAt: new Date("2025-10-05T12:09:29.297Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2026-12-31T14:07:04.115Z"),
    modifiedAt: new Date("2024-06-10T03:32:41.157Z"),
    type: "discord",
    description: "that frightfully fantastic wound as",
    selectable: true,
    deletable: false,
    organizationId: "<value>",
    metadata: {},
    properties: {
      guildId: "<id>",
      roleId: "<id>",
      kickMember: false,
      guildToken: "<value>",
    },
  },
  properties: {},
};
```

### `components.BenefitGrantCustomWebhook`

```typescript
const value: components.BenefitGrantCustomWebhook = {
  createdAt: new Date("2024-04-18T19:54:48.401Z"),
  modifiedAt: new Date("2026-04-22T15:54:09.627Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-06-04T21:28:32.740Z"),
    modifiedAt: new Date("2024-03-21T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
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
    deletedAt: new Date("2026-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2026-01-19T18:11:16.982Z"),
    modifiedAt: new Date("2025-10-05T12:09:29.297Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2026-03-26T16:08:46.490Z"),
    modifiedAt: new Date("2024-05-22T09:29:41.973Z"),
    type: "custom",
    description: "seldom essay oval if boo profuse uh-huh",
    selectable: true,
    deletable: false,
    organizationId: "<value>",
    metadata: {},
    properties: {
      note: "<value>",
    },
  },
  properties: {},
};
```

### `components.BenefitGrantGitHubRepositoryWebhook`

```typescript
const value: components.BenefitGrantGitHubRepositoryWebhook = {
  createdAt: new Date("2025-03-08T15:32:24.757Z"),
  modifiedAt: new Date("2024-12-19T06:43:20.508Z"),
  id: "<value>",
  isGranted: false,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-06-04T21:28:32.740Z"),
    modifiedAt: new Date("2024-03-21T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
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
    deletedAt: new Date("2026-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2026-01-19T18:11:16.982Z"),
    modifiedAt: new Date("2025-10-05T12:09:29.297Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2026-05-01T16:24:20.581Z"),
    modifiedAt: null,
    type: "github_repository",
    description: "vicinity spectate publication athwart likely far",
    selectable: true,
    deletable: true,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    properties: {
      repositoryOwner: "polarsource",
      repositoryName: "private_repo",
      permission: "admin",
    },
  },
  properties: {},
};
```

### `components.BenefitGrantDownloadablesWebhook`

```typescript
const value: components.BenefitGrantDownloadablesWebhook = {
  createdAt: new Date("2026-09-16T06:48:34.889Z"),
  modifiedAt: new Date("2024-05-18T09:10:18.729Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: false,
  subscriptionId: null,
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-06-04T21:28:32.740Z"),
    modifiedAt: new Date("2024-03-21T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
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
    deletedAt: new Date("2026-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2026-01-19T18:11:16.982Z"),
    modifiedAt: new Date("2025-10-05T12:09:29.297Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-09-23T13:35:30.918Z"),
    modifiedAt: new Date("2025-06-07T16:02:28.341Z"),
    type: "downloadables",
    description: "opposite instead aha delete ick",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    properties: {
      archived: {
        "key": false,
      },
      files: [
        "<value 1>",
        "<value 2>",
      ],
    },
  },
  properties: {},
};
```

### `components.BenefitGrantLicenseKeysWebhook`

```typescript
const value: components.BenefitGrantLicenseKeysWebhook = {
  createdAt: new Date("2024-03-27T04:10:14.057Z"),
  modifiedAt: new Date("2026-11-09T06:34:32.498Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: false,
  subscriptionId: null,
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-06-04T21:28:32.740Z"),
    modifiedAt: new Date("2024-03-21T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
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
    deletedAt: new Date("2026-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2026-01-19T18:11:16.982Z"),
    modifiedAt: new Date("2025-10-05T12:09:29.297Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-11-28T17:40:59.074Z"),
    modifiedAt: new Date("2025-10-14T07:36:23.610Z"),
    type: "license_keys",
    description: "artistic monasticism when that",
    selectable: true,
    deletable: true,
    organizationId: "<value>",
    metadata: {},
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 93452,
        timeframe: "day",
      },
      activations: {
        limit: 777902,
        enableCustomerAdmin: true,
      },
      limitUsage: null,
    },
  },
  properties: {},
};
```

### `components.BenefitGrantMeterCreditWebhook`

```typescript
const value: components.BenefitGrantMeterCreditWebhook = {
  createdAt: new Date("2025-03-25T07:43:23.918Z"),
  modifiedAt: new Date("2025-05-01T18:17:06.742Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-06-04T21:28:32.740Z"),
    modifiedAt: new Date("2024-03-21T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
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
    deletedAt: new Date("2026-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2026-01-19T18:11:16.982Z"),
    modifiedAt: new Date("2025-10-05T12:09:29.297Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-10-04T20:17:27.013Z"),
    modifiedAt: new Date("2026-12-13T13:45:10.283Z"),
    type: "meter_credit",
    description:
      "since longingly store from failing graceful afore hungry trench rim",
    selectable: false,
    deletable: true,
    organizationId: "<value>",
    metadata: {},
    properties: {
      units: 76669,
      rollover: false,
      meterId: "<value>",
    },
  },
  properties: {},
};
```

