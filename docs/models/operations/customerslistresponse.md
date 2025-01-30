# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations/customerslist.js";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-08-25T00:50:34.161Z"),
        modifiedAt: new Date("2023-04-08T15:48:04.523Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        email: "Merl_Hoeger@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Congo",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://tangible-fishery.org",
      },
    ],
    pagination: {
      totalCount: 946912,
      maxPage: 712252,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |