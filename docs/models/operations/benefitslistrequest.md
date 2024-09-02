# BenefitsListRequest

## Example Usage

```typescript
import { BenefitsListRequest } from "@polar-sh/sdk/models/operations";

let value: BenefitsListRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `organizationId`                                        | *operations.BenefitsListQueryParamOrganizationIDFilter* | :heavy_minus_sign:                                      | Filter by organization ID.                              |
| `typeFilter`                                            | *operations.QueryParamBenefitTypeFilter*                | :heavy_minus_sign:                                      | Filter by benefit type.                                 |
| `page`                                                  | *number*                                                | :heavy_minus_sign:                                      | Page number, defaults to 1.                             |
| `limit`                                                 | *number*                                                | :heavy_minus_sign:                                      | Size of a page, defaults to 10. Maximum is 100.         |