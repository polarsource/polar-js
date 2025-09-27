# BenefitGrantWebhook


## Supported Types

### `components.BenefitGrantDiscordWebhook`

```typescript
const value: components.BenefitGrantDiscordWebhook = {
  createdAt: new Date("2025-04-01T03:14:09.160Z"),
  modifiedAt: new Date("2024-07-28T13:13:39.901Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-04-26T10:19:45.222Z"),
    modifiedAt: new Date("2025-02-01T06:50:40.155Z"),
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
    deletedAt: new Date("2025-09-01T02:27:46.266Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-03-24T01:24:22.231Z"),
    modifiedAt: new Date("2025-09-09T16:14:57.265Z"),
    type: "discord",
    description: "contrast crystallize robust finally",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    metadata: {
      "key": 386.61,
    },
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
  createdAt: new Date("2023-04-19T19:54:48.401Z"),
  modifiedAt: new Date("2025-04-22T15:54:09.627Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-04-26T10:19:45.222Z"),
    modifiedAt: new Date("2025-02-01T06:50:40.155Z"),
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
    deletedAt: new Date("2025-09-01T02:27:46.266Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2024-01-20T02:50:19.451Z"),
    modifiedAt: new Date("2024-06-16T20:41:24.432Z"),
    type: "custom",
    description: "cassava vainly vague father",
    selectable: true,
    deletable: true,
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
  createdAt: new Date("2024-03-08T15:32:24.757Z"),
  modifiedAt: new Date("2023-12-20T06:43:20.508Z"),
  id: "<value>",
  isGranted: false,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-04-26T10:19:45.222Z"),
    modifiedAt: new Date("2025-02-01T06:50:40.155Z"),
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
    deletedAt: new Date("2025-09-01T02:27:46.266Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2023-08-12T07:30:21.850Z"),
    modifiedAt: new Date("2023-04-19T07:07:21.162Z"),
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
  createdAt: new Date("2025-09-16T06:48:34.889Z"),
  modifiedAt: new Date("2023-05-19T09:10:18.729Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: false,
  subscriptionId: null,
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-04-26T10:19:45.222Z"),
    modifiedAt: new Date("2025-02-01T06:50:40.155Z"),
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
    deletedAt: new Date("2025-09-01T02:27:46.266Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-02-09T09:21:30.385Z"),
    modifiedAt: new Date("2023-09-01T08:02:14.520Z"),
    type: "downloadables",
    description: "gladly rapidly record excluding because ill",
    selectable: false,
    deletable: true,
    organizationId: "<value>",
    metadata: {
      "key": 834881,
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
  createdAt: new Date("2023-03-28T04:10:14.057Z"),
  modifiedAt: new Date("2025-11-09T06:34:32.498Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: false,
  subscriptionId: null,
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-04-26T10:19:45.222Z"),
    modifiedAt: new Date("2025-02-01T06:50:40.155Z"),
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
    deletedAt: new Date("2025-09-01T02:27:46.266Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2024-01-09T05:46:42.550Z"),
    modifiedAt: new Date("2025-02-03T07:44:40.734Z"),
    type: "license_keys",
    description: "monasticism when that",
    selectable: true,
    deletable: true,
    organizationId: "<value>",
    metadata: {},
    properties: {
      prefix: null,
      expires: {
        ttl: 84298,
        timeframe: "year",
      },
      activations: {
        limit: 202982,
        enableCustomerAdmin: false,
      },
      limitUsage: 666374,
    },
  },
  properties: {},
};
```

### `components.BenefitGrantMeterCreditWebhook`

```typescript
const value: components.BenefitGrantMeterCreditWebhook = {
  createdAt: new Date("2024-03-25T07:43:23.918Z"),
  modifiedAt: new Date("2024-05-01T18:17:06.742Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-04-26T10:19:45.222Z"),
    modifiedAt: new Date("2025-02-01T06:50:40.155Z"),
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
    deletedAt: new Date("2025-09-01T02:27:46.266Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2024-01-16T07:44:47.570Z"),
    modifiedAt: new Date("2023-08-20T06:58:17.350Z"),
    type: "meter_credit",
    description:
      "greedily analyse near horde pocket-watch neglected shrilly or aha coaxingly",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    metadata: {},
    properties: {
      units: 298008,
      rollover: false,
      meterId: "<value>",
    },
  },
  properties: {},
};
```

