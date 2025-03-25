# BenefitsListRequest

## Example Usage

```typescript
import { BenefitsListRequest } from "@polar-sh/sdk/models/operations/benefitslist.js";

let value: BenefitsListRequest = {
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `organizationId`                                        | *operations.BenefitsListQueryParamOrganizationIDFilter* | :heavy_minus_sign:                                      | Filter by organization ID.                              |
| `typeFilter`                                            | *operations.BenefitTypeFilter*                          | :heavy_minus_sign:                                      | Filter by benefit type.                                 |
| `query`                                                 | *string*                                                | :heavy_minus_sign:                                      | Filter by description.                                  |
| `page`                                                  | *number*                                                | :heavy_minus_sign:                                      | Page number, defaults to 1.                             |
| `limit`                                                 | *number*                                                | :heavy_minus_sign:                                      | Size of a page, defaults to 10. Maximum is 100.         |