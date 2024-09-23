# BenefitsCreateResponseBenefitsCreate

Benefit created.

## Example Usage

```typescript
import { BenefitsCreateResponseBenefitsCreate } from "@polar-sh/sdk/models/operations";

let value: BenefitsCreateResponseBenefitsCreate = {
  createdAt: new Date("2022-02-20T10:10:34.700Z"),
  modifiedAt: new Date("2022-09-12T23:01:13.510Z"),
  id: "<value>",
  description: "Future-proofed secondary website",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 968972,
      timeframe: "day",
    },
    activations: {
      limit: 296556,
      enableUserAdmin: false,
    },
    limitUsage: 992012,
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

