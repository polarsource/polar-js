# CustomerPortalDownloadablesListRequest

## Example Usage

```typescript
import { CustomerPortalDownloadablesListRequest } from "@polar-sh/sdk/models/operations/customerportaldownloadableslist.js";

let value: CustomerPortalDownloadablesListRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `benefitId`                                                           | *operations.CustomerPortalDownloadablesListQueryParamBenefitIDFilter* | :heavy_minus_sign:                                                    | Filter by benefit ID.                                                 |
| `page`                                                                | *number*                                                              | :heavy_minus_sign:                                                    | Page number, defaults to 1.                                           |
| `limit`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | Size of a page, defaults to 10. Maximum is 100.                       |