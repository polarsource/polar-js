# UserBenefit

## Example Usage

```typescript
import { UserBenefit } from "@polar-sh/sdk/models/components";

let value: UserBenefit = {
  createdAt: new Date("2023-10-09T12:59:31.397Z"),
  modifiedAt: new Date("2024-04-02T22:12:25.458Z"),
  id: "<value>",
  description: "Re-engineered well-modulated extranet",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 554242,
      timeframe: "month",
    },
    activations: {
      limit: 212390,
      enableUserAdmin: false,
    },
    limitUsage: 209843,
  },
  grants: [
    {
      createdAt: new Date("2022-09-01T19:08:47.580Z"),
      modifiedAt: new Date("2022-07-24T01:37:14.932Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      properties: {
        licenseKeyId: "<value>",
        displayKey: "<value>",
      },
      subscriptionId: "<value>",
      orderId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
    },
  ],
};
```

## Supported Types

### `components.BenefitAdsSubscriber`

```typescript
const value: components.BenefitAdsSubscriber = /* values here */
```

### `components.BenefitArticlesSubscriber`

```typescript
const value: components.BenefitArticlesSubscriber = /* values here */
```

### `components.BenefitCustomSubscriber`

```typescript
const value: components.BenefitCustomSubscriber = /* values here */
```

### `components.BenefitDiscordSubscriber`

```typescript
const value: components.BenefitDiscordSubscriber = /* values here */
```

### `components.BenefitDownloadablesSubscriber`

```typescript
const value: components.BenefitDownloadablesSubscriber = /* values here */
```

### `components.BenefitGitHubRepositorySubscriber`

```typescript
const value: components.BenefitGitHubRepositorySubscriber = /* values here */
```

### `components.BenefitLicenseKeysSubscriber`

```typescript
const value: components.BenefitLicenseKeysSubscriber = /* values here */
```

