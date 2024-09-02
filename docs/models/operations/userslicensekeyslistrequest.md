# UsersLicenseKeysListRequest

## Example Usage

```typescript
import { UsersLicenseKeysListRequest } from "@polar-sh/sdk/models/operations";

let value: UsersLicenseKeysListRequest = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `organizationId`                                                | *operations.UsersLicenseKeysListQueryParamOrganizationIDFilter* | :heavy_minus_sign:                                              | Filter by organization ID.                                      |
| `benefitId`                                                     | *string*                                                        | :heavy_minus_sign:                                              | Filter by a specific benefit                                    |
| `page`                                                          | *number*                                                        | :heavy_minus_sign:                                              | Page number, defaults to 1.                                     |
| `limit`                                                         | *number*                                                        | :heavy_minus_sign:                                              | Size of a page, defaults to 10. Maximum is 100.                 |