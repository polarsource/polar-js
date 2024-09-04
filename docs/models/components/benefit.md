# Benefit

## Example Usage

```typescript
import { Benefit } from "@polar-sh/sdk/models/components";

let value: Benefit = {
    createdAt: new Date("2023-10-18T08:07:39.633Z"),
    modifiedAt: new Date("2023-05-05T05:57:31.258Z"),
    id: "<value>",
    description: "Enterprise-wide transitional leverage",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
        prefix: "<value>",
        expires: {
            ttl: 160230,
            timeframe: "year",
        },
        activations: {
            limit: 661118,
            enableUserAdmin: false,
        },
        limitUsage: 335631,
    },
};
```

## Supported Types

### `components.BenefitArticles`

```typescript
const value: components.BenefitArticles = /* values here */
```

### `components.BenefitAds`

```typescript
const value: components.BenefitAds = /* values here */
```

### `components.BenefitCustom`

```typescript
const value: components.BenefitCustom = /* values here */
```

### `components.BenefitDiscordOutput`

```typescript
const value: components.BenefitDiscordOutput = /* values here */
```

### `components.BenefitGitHubRepository`

```typescript
const value: components.BenefitGitHubRepository = /* values here */
```

### `components.BenefitDownloadables`

```typescript
const value: components.BenefitDownloadables = /* values here */
```

### `components.BenefitLicenseKeysOutput`

```typescript
const value: components.BenefitLicenseKeysOutput = /* values here */
```

