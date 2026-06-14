# Benefit


## Supported Types

### `components.BenefitCustom`

```typescript
const value: components.BenefitCustom = {
  id: "<value>",
  createdAt: new Date("2024-08-25T14:42:37.044Z"),
  modifiedAt: new Date("2025-04-13T00:00:15.234Z"),
  type: "custom",
  description: "how nor limited scoff ownership",
  selectable: false,
  deletable: true,
  isDeleted: false,
  organizationId: "<value>",
  metadata: {},
  visibility: "public",
  properties: {
    note: "<value>",
  },
  visibilityConfigurable: false,
};
```

### `components.BenefitDiscord`

```typescript
const value: components.BenefitDiscord = {
  id: "<value>",
  createdAt: new Date("2026-05-26T06:25:53.245Z"),
  modifiedAt: new Date("2025-12-27T10:01:08.309Z"),
  type: "discord",
  description: "after incidentally whose",
  selectable: false,
  deletable: true,
  isDeleted: false,
  organizationId: "<value>",
  metadata: {},
  visibility: "private",
  properties: {
    guildId: "<id>",
    roleId: "<id>",
    kickMember: true,
    guildToken: "<value>",
  },
  visibilityConfigurable: false,
};
```

### `components.BenefitDownloadables`

```typescript
const value: components.BenefitDownloadables = {
  id: "<value>",
  createdAt: new Date("2024-10-18T18:24:22.763Z"),
  modifiedAt: new Date("2025-09-19T16:48:07.217Z"),
  type: "downloadables",
  description: "supposing allocation dull scowl bootleg illiterate hmph amid",
  selectable: true,
  deletable: true,
  isDeleted: false,
  organizationId: "<value>",
  metadata: {
    "key": 3971.46,
  },
  visibility: "private",
  properties: {
    archived: {
      "key": false,
      "key1": false,
    },
    files: [],
  },
  visibilityConfigurable: true,
};
```

### `components.BenefitFeatureFlag`

```typescript
const value: components.BenefitFeatureFlag = {
  id: "<value>",
  createdAt: new Date("2026-01-23T21:17:09.985Z"),
  modifiedAt: new Date("2026-03-18T19:56:22.426Z"),
  type: "feature_flag",
  description: "while dreary bestride revoke continually hm so terrible",
  selectable: true,
  deletable: true,
  isDeleted: true,
  organizationId: "<value>",
  metadata: {},
  visibility: "public",
  properties: {},
  visibilityConfigurable: false,
};
```

### `components.BenefitGitHubRepository`

```typescript
const value: components.BenefitGitHubRepository = {
  id: "<value>",
  createdAt: new Date("2026-09-20T17:50:31.812Z"),
  modifiedAt: new Date("2024-09-08T10:06:16.908Z"),
  type: "github_repository",
  description: "hoarse secrecy entwine stunning energetically",
  selectable: true,
  deletable: true,
  isDeleted: false,
  organizationId: "<value>",
  metadata: {
    "key": 8581.7,
  },
  visibility: "draft",
  properties: {
    repositoryOwner: "polarsource",
    repositoryName: "private_repo",
    permission: "pull",
  },
  visibilityConfigurable: true,
};
```

### `components.BenefitLicenseKeys`

```typescript
const value: components.BenefitLicenseKeys = {
  id: "<value>",
  createdAt: new Date("2026-09-22T06:32:51.347Z"),
  modifiedAt: new Date("2025-01-11T01:51:09.622Z"),
  type: "license_keys",
  description: "vivaciously now that",
  selectable: true,
  deletable: true,
  isDeleted: true,
  organizationId: "<value>",
  metadata: {},
  visibility: "public",
  properties: {
    prefix: null,
    expires: {
      ttl: 240022,
      timeframe: "day",
    },
    activations: null,
    limitUsage: null,
  },
  visibilityConfigurable: false,
};
```

### `components.BenefitMeterCredit`

```typescript
const value: components.BenefitMeterCredit = {
  id: "<value>",
  createdAt: new Date("2026-07-13T02:35:52.595Z"),
  modifiedAt: new Date("2026-08-26T02:40:11.876Z"),
  type: "meter_credit",
  description: "pish than huzzah rekindle lively approximate against meal",
  selectable: true,
  deletable: false,
  isDeleted: true,
  organizationId: "<value>",
  metadata: {},
  visibility: "private",
  properties: {
    units: 953570,
    rollover: false,
    meterId: "<value>",
  },
  visibilityConfigurable: true,
};
```

### `components.BenefitSlackSharedChannel`

```typescript
const value: components.BenefitSlackSharedChannel = {
  id: "<value>",
  createdAt: new Date("2025-10-12T14:29:51.310Z"),
  modifiedAt: new Date("2026-10-16T23:28:38.799Z"),
  type: "slack_shared_channel",
  description: "inside aboard swear including randomize qua",
  selectable: true,
  deletable: true,
  isDeleted: true,
  organizationId: "<value>",
  metadata: {
    "key": false,
  },
  visibility: "public",
  properties: {
    slackIntegrationId: "<value>",
    channelNameTemplate: "<value>",
  },
  visibilityConfigurable: false,
};
```

