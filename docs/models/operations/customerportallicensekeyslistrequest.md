# CustomerPortalLicenseKeysListRequest

## Example Usage

```typescript
import { CustomerPortalLicenseKeysListRequest } from "@polar-sh/sdk/models/operations/customerportallicensekeyslist.js";

let value: CustomerPortalLicenseKeysListRequest = {
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `organizationId`                                                         | *operations.CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter* | :heavy_minus_sign:                                                       | Filter by organization ID.                                               |
| `benefitId`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | Filter by a specific benefit                                             |
| `page`                                                                   | *number*                                                                 | :heavy_minus_sign:                                                       | Page number, defaults to 1.                                              |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | Size of a page, defaults to 10. Maximum is 100.                          |