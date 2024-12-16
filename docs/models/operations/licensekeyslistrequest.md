# LicenseKeysListRequest

## Example Usage

```typescript
import { LicenseKeysListRequest } from "@polar-sh/sdk/models/operations";

let value: LicenseKeysListRequest = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `organizationId`                                           | *operations.LicenseKeysListQueryParamOrganizationIDFilter* | :heavy_minus_sign:                                         | Filter by organization ID.                                 |
| `benefitId`                                                | *operations.QueryParamBenefitIDFilter*                     | :heavy_minus_sign:                                         | Filter by benefit ID.                                      |
| `page`                                                     | *number*                                                   | :heavy_minus_sign:                                         | Page number, defaults to 1.                                |
| `limit`                                                    | *number*                                                   | :heavy_minus_sign:                                         | Size of a page, defaults to 10. Maximum is 100.            |