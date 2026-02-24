# CustomerPortalMembersListMembersResponse

## Example Usage

```typescript
import { CustomerPortalMembersListMembersResponse } from "@polar-sh/sdk/models/operations/customerportalmemberslistmembers.js";

let value: CustomerPortalMembersListMembersResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2026-05-05T01:54:50.756Z"),
        modifiedAt: new Date("2025-12-20T18:31:22.655Z"),
        id: "<value>",
        email: "Reyna_Gulgowski23@hotmail.com",
        name: "<value>",
        role: "billing_manager",
      },
    ],
    pagination: {
      totalCount: 296266,
      maxPage: 544155,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerPortalMember](../../models/components/listresourcecustomerportalmember.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |