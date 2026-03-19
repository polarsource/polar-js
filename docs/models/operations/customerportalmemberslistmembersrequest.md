# CustomerPortalMembersListMembersRequest

## Example Usage

```typescript
import { CustomerPortalMembersListMembersRequest } from "@polar-sh/sdk/models/operations/customerportalmemberslistmembers.js";

let value: CustomerPortalMembersListMembersRequest = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `page`                                          | *number*                                        | :heavy_minus_sign:                              | Page number, defaults to 1.                     |
| `limit`                                         | *number*                                        | :heavy_minus_sign:                              | Size of a page, defaults to 10. Maximum is 100. |