# UsersDownloadablesListRequest

## Example Usage

```typescript
import { UsersDownloadablesListRequest } from "@polar-sh/sdk/models/operations";

let value: UsersDownloadablesListRequest = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `organizationId`                                                  | *operations.UsersDownloadablesListQueryParamOrganizationIDFilter* | :heavy_minus_sign:                                                | Filter by organization ID.                                        |
| `benefitId`                                                       | *operations.BenefitIDFilter*                                      | :heavy_minus_sign:                                                | Filter by given benefit ID.                                       |
| `page`                                                            | *number*                                                          | :heavy_minus_sign:                                                | Page number, defaults to 1.                                       |
| `limit`                                                           | *number*                                                          | :heavy_minus_sign:                                                | Size of a page, defaults to 10. Maximum is 100.                   |