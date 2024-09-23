# UsersBenefitsGetResponseUsersBenefitsGet

Successful Response

## Example Usage

```typescript
import { UsersBenefitsGetResponseUsersBenefitsGet } from "@polar-sh/sdk/models/operations";

let value: UsersBenefitsGetResponseUsersBenefitsGet = {
  createdAt: new Date("2022-03-19T20:31:56.909Z"),
  modifiedAt: new Date("2022-04-06T11:50:56.757Z"),
  id: "<value>",
  description: "Ameliorated stable product",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 870013,
      timeframe: "day",
    },
    activations: {
      limit: 799159,
      enableUserAdmin: false,
    },
    limitUsage: 461479,
  },
  grants: [
    {
      createdAt: new Date("2024-05-05T11:02:22.031Z"),
      modifiedAt: new Date("2022-05-10T15:05:25.793Z"),
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

### `components.BenefitArticlesSubscriber`

```typescript
const value: components.BenefitArticlesSubscriber = /* values here */
```

### `components.BenefitAdsSubscriber`

```typescript
const value: components.BenefitAdsSubscriber = /* values here */
```

### `components.BenefitDiscordSubscriber`

```typescript
const value: components.BenefitDiscordSubscriber = /* values here */
```

### `components.BenefitCustomSubscriber`

```typescript
const value: components.BenefitCustomSubscriber = /* values here */
```

### `components.BenefitGitHubRepositorySubscriber`

```typescript
const value: components.BenefitGitHubRepositorySubscriber = /* values here */
```

### `components.BenefitDownloadablesSubscriber`

```typescript
const value: components.BenefitDownloadablesSubscriber = /* values here */
```

### `components.BenefitLicenseKeysSubscriber`

```typescript
const value: components.BenefitLicenseKeysSubscriber = /* values here */
```

