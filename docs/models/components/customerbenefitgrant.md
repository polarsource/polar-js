# CustomerBenefitGrant


## Supported Types

### `components.CustomerBenefitGrantDiscord`

```typescript
const value: components.CustomerBenefitGrantDiscord = {
  createdAt: new Date("2023-04-02T19:52:21.245Z"),
  modifiedAt: new Date("2023-11-02T07:46:05.555Z"),
  id: "<value>",
  grantedAt: new Date("2024-06-14T15:29:42.558Z"),
  revokedAt: new Date("2024-02-07T19:33:05.653Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: true,
  isRevoked: false,
  customer: {
    createdAt: new Date("2023-10-06T17:24:11.012Z"),
    modifiedAt: new Date("2023-12-28T23:55:37.070Z"),
    id: "<value>",
    email: "Greg77@hotmail.com",
    emailVerified: true,
    name: "<value>",
    billingName: null,
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2024-05-17T00:28:43.446Z"),
    modifiedAt: new Date("2024-07-03T08:18:47.444Z"),
    type: "discord",
    description:
      "reasonable blah vibraphone instead loose rosy furthermore swiftly",
    selectable: true,
    deletable: true,
    organizationId: "<value>",
    metadata: {
      "key": 185641,
    },
    organization: {
      createdAt: new Date("2023-02-09T14:46:30.040Z"),
      modifiedAt: new Date("2024-07-28T16:12:54.009Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://spotless-knight.com/",
      prorationBehavior: "prorate",
      allowCustomerUpdates: true,
    },
    properties: {
      guildId: "<id>",
    },
  },
  properties: {},
};
```

### `components.CustomerBenefitGrantGitHubRepository`

```typescript
const value: components.CustomerBenefitGrantGitHubRepository = {
  createdAt: new Date("2024-09-05T14:33:30.256Z"),
  modifiedAt: new Date("2024-12-26T09:09:05.844Z"),
  id: "<value>",
  grantedAt: new Date("2023-10-09T03:13:42.047Z"),
  revokedAt: new Date("2024-04-18T19:36:46.698Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: true,
  isRevoked: true,
  customer: {
    createdAt: new Date("2023-10-06T17:24:11.012Z"),
    modifiedAt: new Date("2023-12-28T23:55:37.070Z"),
    id: "<value>",
    email: "Greg77@hotmail.com",
    emailVerified: true,
    name: "<value>",
    billingName: null,
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-08-15T15:18:05.217Z"),
    modifiedAt: new Date("2023-11-11T09:31:06.640Z"),
    type: "github_repository",
    description: "till championship failing filthy",
    selectable: false,
    deletable: true,
    organizationId: "<value>",
    metadata: {
      "key": 9187.27,
    },
    organization: {
      createdAt: new Date("2023-02-09T14:46:30.040Z"),
      modifiedAt: new Date("2024-07-28T16:12:54.009Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://spotless-knight.com/",
      prorationBehavior: "prorate",
      allowCustomerUpdates: true,
    },
    properties: {
      repositoryOwner: "polarsource",
      repositoryName: "private_repo",
    },
  },
  properties: {},
};
```

### `components.CustomerBenefitGrantDownloadables`

```typescript
const value: components.CustomerBenefitGrantDownloadables = {
  createdAt: new Date("2023-08-19T04:17:07.651Z"),
  modifiedAt: null,
  id: "<value>",
  grantedAt: new Date("2024-07-02T19:26:03.934Z"),
  revokedAt: null,
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: true,
  customer: {
    createdAt: new Date("2023-10-06T17:24:11.012Z"),
    modifiedAt: new Date("2023-12-28T23:55:37.070Z"),
    id: "<value>",
    email: "Greg77@hotmail.com",
    emailVerified: true,
    name: "<value>",
    billingName: null,
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2023-04-16T09:10:09.910Z"),
    modifiedAt: new Date("2023-12-30T04:50:40.414Z"),
    type: "downloadables",
    description: "apologise flint king save to at availability ick",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    metadata: {},
    organization: {
      createdAt: new Date("2023-02-09T14:46:30.040Z"),
      modifiedAt: new Date("2024-07-28T16:12:54.009Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://spotless-knight.com/",
      prorationBehavior: "prorate",
      allowCustomerUpdates: true,
    },
    properties: {
      activeFiles: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  },
  properties: {},
};
```

### `components.CustomerBenefitGrantLicenseKeys`

```typescript
const value: components.CustomerBenefitGrantLicenseKeys = {
  createdAt: new Date("2023-12-29T05:36:27.136Z"),
  modifiedAt: new Date("2025-08-05T20:48:50.717Z"),
  id: "<value>",
  grantedAt: new Date("2024-08-17T04:16:46.889Z"),
  revokedAt: new Date("2024-10-07T19:01:44.373Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2023-10-06T17:24:11.012Z"),
    modifiedAt: new Date("2023-12-28T23:55:37.070Z"),
    id: "<value>",
    email: "Greg77@hotmail.com",
    emailVerified: true,
    name: "<value>",
    billingName: null,
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-10-07T04:17:24.786Z"),
    modifiedAt: new Date("2025-05-05T02:01:44.871Z"),
    type: "license_keys",
    description: "light indeed mmm scary import cricket wear mysteriously",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    metadata: {},
    organization: {
      createdAt: new Date("2023-02-09T14:46:30.040Z"),
      modifiedAt: new Date("2024-07-28T16:12:54.009Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://spotless-knight.com/",
      prorationBehavior: "prorate",
      allowCustomerUpdates: true,
    },
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
      limitUsage: 977381,
    },
  },
  properties: {},
};
```

### `components.CustomerBenefitGrantCustom`

```typescript
const value: components.CustomerBenefitGrantCustom = {
  createdAt: new Date("2023-11-18T01:23:25.583Z"),
  modifiedAt: new Date("2024-12-10T17:33:07.669Z"),
  id: "<value>",
  grantedAt: new Date("2023-12-17T07:56:31.600Z"),
  revokedAt: new Date("2023-04-19T16:54:50.994Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: true,
  customer: {
    createdAt: new Date("2023-10-06T17:24:11.012Z"),
    modifiedAt: new Date("2023-12-28T23:55:37.070Z"),
    id: "<value>",
    email: "Greg77@hotmail.com",
    emailVerified: true,
    name: "<value>",
    billingName: null,
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2024-06-16T12:13:12.228Z"),
    modifiedAt: new Date("2025-01-08T16:08:00.921Z"),
    type: "custom",
    description:
      "coincide who at presume worriedly quash furthermore quickly forenenst now",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    organization: {
      createdAt: new Date("2023-02-09T14:46:30.040Z"),
      modifiedAt: new Date("2024-07-28T16:12:54.009Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://spotless-knight.com/",
      prorationBehavior: "prorate",
      allowCustomerUpdates: true,
    },
    properties: {
      note: "<value>",
    },
  },
  properties: {},
};
```

### `components.CustomerBenefitGrantMeterCredit`

```typescript
const value: components.CustomerBenefitGrantMeterCredit = {
  createdAt: new Date("2024-04-14T20:11:35.311Z"),
  modifiedAt: new Date("2025-05-18T14:47:11.111Z"),
  id: "<value>",
  grantedAt: new Date("2025-12-27T05:01:17.641Z"),
  revokedAt: new Date("2023-04-01T11:45:01.104Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2023-10-06T17:24:11.012Z"),
    modifiedAt: new Date("2023-12-28T23:55:37.070Z"),
    id: "<value>",
    email: "Greg77@hotmail.com",
    emailVerified: true,
    name: "<value>",
    billingName: null,
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2023-10-05T20:32:44.950Z"),
    modifiedAt: new Date("2024-09-25T16:16:12.273Z"),
    type: "meter_credit",
    description: "considering kiddingly direct or",
    selectable: false,
    deletable: true,
    organizationId: "<value>",
    metadata: {
      "key": true,
    },
    organization: {
      createdAt: new Date("2023-02-09T14:46:30.040Z"),
      modifiedAt: new Date("2024-07-28T16:12:54.009Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://spotless-knight.com/",
      prorationBehavior: "prorate",
      allowCustomerUpdates: true,
    },
    properties: {
      units: 246327,
      rollover: false,
      meterId: "<value>",
    },
  },
  properties: {},
};
```

