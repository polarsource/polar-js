# BenefitsGrantsRequest

## Example Usage

```typescript
import { BenefitsGrantsRequest } from "@polar-sh/sdk/models/operations/benefitsgrants.js";

let value: BenefitsGrantsRequest = {
  id: "<value>",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                              | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `isGranted`                                                                                                                       | *boolean*                                                                                                                         | :heavy_minus_sign:                                                                                                                | Filter by granted status. If `true`, only granted benefits will be returned. If `false`, only revoked benefits will be returned.  |
| `customerId`                                                                                                                      | *operations.QueryParamCustomerIDFilter*                                                                                           | :heavy_minus_sign:                                                                                                                | Filter by customer.                                                                                                               |
| `page`                                                                                                                            | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | Page number, defaults to 1.                                                                                                       |
| `limit`                                                                                                                           | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | Size of a page, defaults to 10. Maximum is 100.                                                                                   |