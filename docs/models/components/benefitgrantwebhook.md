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
    createdAt: new Date("2026-12-31T14:07:04.115Z"),
    modifiedAt: new Date("2024-06-10T03:32:41.157Z"),
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
    deletedAt: new Date("2024-07-02T06:56:14.780Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2024-08-29T23:41:53.521Z"),
    modifiedAt: new Date("2024-05-20T19:39:16.494Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-05-20T12:56:24.489Z"),
    modifiedAt: new Date("2025-12-01T02:59:14.937Z"),
    type: "discord",
    description: "sense apud ha lest courageous",
    selectable: false,
    deletable: false,
    isDeleted: true,
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
    createdAt: new Date("2026-03-26T16:08:46.490Z"),
    modifiedAt: new Date("2024-05-22T09:29:41.973Z"),
    metadata: {
      "key": "<value>",
    },
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
    deletedAt: new Date("2024-06-21T14:11:31.615Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2024-08-29T23:41:53.521Z"),
    modifiedAt: new Date("2024-05-20T19:39:16.494Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2024-05-16T11:42:55.642Z"),
    modifiedAt: new Date("2025-06-21T18:56:50.504Z"),
    type: "custom",
    description:
      "unibody ambitious boohoo culture well-made technician opposite subtle pish",
    selectable: false,
    deletable: true,
    isDeleted: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
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
    createdAt: new Date("2026-05-01T16:24:20.581Z"),
    modifiedAt: null,
    metadata: {},
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
    deletedAt: new Date("2025-07-06T14:17:18.041Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2024-08-29T23:41:53.521Z"),
    modifiedAt: new Date("2024-05-20T19:39:16.494Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-10-27T15:55:44.917Z"),
    modifiedAt: new Date("2026-11-26T16:25:16.282Z"),
    type: "github_repository",
    description: "teammate or ravage indeed",
    selectable: false,
    deletable: false,
    isDeleted: true,
    organizationId: "<value>",
    metadata: {
      "key": 234300,
    },
    properties: {
      repositoryOwner: "polarsource",
      repositoryName: "private_repo",
      permission: "triage",
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
    createdAt: new Date("2025-09-23T13:35:30.918Z"),
    modifiedAt: new Date("2025-06-07T16:02:28.341Z"),
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
    deletedAt: new Date("2024-08-08T13:30:36.964Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2024-08-29T23:41:53.521Z"),
    modifiedAt: new Date("2024-05-20T19:39:16.494Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-03-02T22:46:32.281Z"),
    modifiedAt: new Date("2025-12-18T13:53:02.296Z"),
    type: "downloadables",
    description: "until loudly replacement though junior agreeable excited",
    selectable: true,
    deletable: false,
    isDeleted: false,
    organizationId: "<value>",
    metadata: {},
    properties: {
      archived: {
        "key": false,
        "key1": false,
      },
      files: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
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
    createdAt: new Date("2024-12-24T12:07:36.548Z"),
    modifiedAt: new Date("2025-12-03T11:49:28.207Z"),
    metadata: {},
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
    deletedAt: new Date("2026-12-15T07:47:35.269Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2024-08-29T23:41:53.521Z"),
    modifiedAt: new Date("2024-05-20T19:39:16.494Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-10-15T22:21:01.919Z"),
    modifiedAt: new Date("2024-02-16T12:33:48.786Z"),
    type: "license_keys",
    description: "ouch woot geez wheel analyse duh",
    selectable: false,
    deletable: false,
    isDeleted: true,
    organizationId: "<value>",
    metadata: {},
    properties: {
      prefix: "<value>",
      expires: null,
      activations: {
        limit: 240022,
        enableCustomerAdmin: false,
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
    createdAt: new Date("2025-10-04T20:17:27.013Z"),
    modifiedAt: new Date("2026-12-13T13:45:10.283Z"),
    metadata: {
      "key": 5682.16,
    },
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
    deletedAt: new Date("2025-06-14T19:06:24.911Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2024-08-29T23:41:53.521Z"),
    modifiedAt: new Date("2024-05-20T19:39:16.494Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-09-07T16:41:04.296Z"),
    modifiedAt: null,
    type: "meter_credit",
    description:
      "blah sometimes catalog uh-huh drat phew impure whole ah darling",
    selectable: false,
    deletable: true,
    isDeleted: false,
    organizationId: "<value>",
    metadata: {},
    properties: {
      units: 507849,
      rollover: false,
      meterId: "<value>",
    },
  },
  properties: {},
};
```

### `components.BenefitGrantFeatureFlagWebhook`

```typescript
const value: components.BenefitGrantFeatureFlagWebhook = {
  createdAt: new Date("2026-02-08T15:05:04.958Z"),
  modifiedAt: new Date("2024-07-10T07:04:29.893Z"),
  id: "<value>",
  isGranted: false,
  isRevoked: false,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-12-20T15:22:06.971Z"),
    modifiedAt: new Date("2026-12-09T05:39:29.991Z"),
    metadata: {
      "key": 655761,
    },
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
    deletedAt: new Date("2026-10-31T23:00:34.339Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2024-08-29T23:41:53.521Z"),
    modifiedAt: new Date("2024-05-20T19:39:16.494Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-11-03T12:51:50.168Z"),
    modifiedAt: new Date("2026-03-21T04:27:51.216Z"),
    type: "feature_flag",
    description: "outgoing upright avow pinion excitedly gripping",
    selectable: true,
    deletable: false,
    isDeleted: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    properties: {},
  },
  properties: {},
};
```

