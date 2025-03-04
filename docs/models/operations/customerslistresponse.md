# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations/customerslist.js";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-02-21T19:32:32.411Z"),
        modifiedAt: new Date("2025-02-20T12:48:12.254Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        externalId: "<id>",
        email: "Brianne.Stokes38@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "San Marino",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://big-diver.biz/",
      },
    ],
    pagination: {
      totalCount: 929981,
      maxPage: 806974,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |