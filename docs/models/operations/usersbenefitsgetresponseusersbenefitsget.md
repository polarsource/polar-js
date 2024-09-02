# UsersBenefitsGetResponseUsersBenefitsGet

Successful Response

## Example Usage

```typescript
import { UsersBenefitsGetResponseUsersBenefitsGet } from "@polar-sh/sdk/models/operations";

let value: UsersBenefitsGetResponseUsersBenefitsGet = {
    createdAt: new Date("2024-05-17T17:32:07.006Z"),
    modifiedAt: new Date("2024-06-09T03:17:10.252Z"),
    id: "<value>",
    description: "Open-source homogeneous local area network",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    grants: [
        {
            createdAt: new Date("2023-03-07T11:48:40.318Z"),
            modifiedAt: new Date("2024-10-11T10:53:37.826Z"),
            id: "<value>",
            isGranted: false,
            isRevoked: false,
            properties: {},
            subscriptionId: "<value>",
            orderId: "<value>",
            userId: "<value>",
            benefitId: "<value>",
        },
    ],
    properties: {
        note: "<value>",
    },
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

