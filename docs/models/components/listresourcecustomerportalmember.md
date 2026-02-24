# ListResourceCustomerPortalMember

## Example Usage

```typescript
import { ListResourceCustomerPortalMember } from "@polar-sh/sdk/models/components/listresourcecustomerportalmember.js";

let value: ListResourceCustomerPortalMember = {
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
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerPortalMember](../../models/components/customerportalmember.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |