# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations/customerslist.js";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-12-15T11:06:40.873Z"),
        modifiedAt: new Date("2025-04-18T04:27:12.304Z"),
        id: "<value>",
        metadata: {
          "key": 832553,
        },
        email: "Josefa.Casper98@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "New Caledonia",
        },
        taxId: [
          "eu_vat",
        ],
        organizationId: "<value>",
        avatarUrl: "https://minor-interior.name/",
      },
    ],
    pagination: {
      totalCount: 63522,
      maxPage: 229557,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |