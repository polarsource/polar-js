# Benefit


## Supported Types

### `components.BenefitCustom`

```typescript
const value: components.BenefitCustom = {
  id: "<value>",
  createdAt: new Date("2023-08-26T14:42:37.044Z"),
  modifiedAt: new Date("2024-04-13T00:00:15.234Z"),
  type: "custom",
  description: "how nor limited scoff ownership",
  selectable: false,
  deletable: true,
  organizationId: "<value>",
  metadata: {
    "key": 936136,
  },
  properties: {
    note: "<value>",
  },
};
```

### `components.BenefitDiscord`

```typescript
const value: components.BenefitDiscord = {
  id: "<value>",
  createdAt: new Date("2025-05-26T06:25:53.245Z"),
  modifiedAt: new Date("2024-12-27T10:01:08.309Z"),
  type: "discord",
  description: "after incidentally whose",
  selectable: false,
  deletable: true,
  organizationId: "<value>",
  metadata: {
    "key": 337726,
  },
  properties: {
    guildId: "<id>",
    roleId: "<id>",
    kickMember: false,
    guildToken: "<value>",
  },
};
```

### `components.BenefitGitHubRepository`

```typescript
const value: components.BenefitGitHubRepository = {
  id: "<value>",
  createdAt: new Date("2025-09-20T17:50:31.812Z"),
  modifiedAt: new Date("2023-09-09T10:06:16.908Z"),
  type: "github_repository",
  description: "hoarse secrecy entwine stunning energetically",
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
};
```

### `components.BenefitDownloadables`

```typescript
const value: components.BenefitDownloadables = {
  id: "<value>",
  createdAt: new Date("2023-10-19T18:24:22.763Z"),
  modifiedAt: new Date("2024-09-19T16:48:07.217Z"),
  type: "downloadables",
  description: "supposing allocation dull scowl bootleg illiterate hmph amid",
  selectable: true,
  deletable: true,
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
};
```

### `components.BenefitLicenseKeys`

```typescript
const value: components.BenefitLicenseKeys = {
  id: "<value>",
  createdAt: new Date("2025-09-22T06:32:51.347Z"),
  modifiedAt: new Date("2024-01-12T01:51:09.622Z"),
  type: "license_keys",
  description: "vivaciously now that",
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
};
```

### `components.BenefitMeterCredit`

```typescript
const value: components.BenefitMeterCredit = {
  id: "<value>",
  createdAt: new Date("2025-07-13T02:35:52.595Z"),
  modifiedAt: new Date("2025-08-26T02:40:11.876Z"),
  type: "meter_credit",
  description: "pish than huzzah rekindle lively approximate against meal",
  selectable: true,
  deletable: false,
  organizationId: "<value>",
  metadata: {},
  properties: {
    units: 298008,
    rollover: false,
    meterId: "<value>",
  },
};
```

