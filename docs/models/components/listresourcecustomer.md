# ListResourceCustomer

## Example Usage

```typescript
import { ListResourceCustomer } from "@polar-sh/sdk/models/components/listresourcecustomer.js";

let value: ListResourceCustomer = {
  items: [
    {
      createdAt: new Date("2023-01-16T03:49:13.516Z"),
      modifiedAt: new Date("2025-10-12T04:07:38.112Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Claudie.Weissnat@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Malawi",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://scared-legislature.org",
    },
  ],
  pagination: {
    totalCount: 660797,
    maxPage: 493496,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Customer](../../models/components/customer.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |