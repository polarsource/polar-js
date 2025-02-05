# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations/customerslist.js";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-19T06:56:52.426Z"),
        modifiedAt: new Date("2024-08-26T02:17:15.307Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        email: "Tyson18@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "France",
        },
        taxId: [
          "jp_cn",
        ],
        organizationId: "<value>",
        avatarUrl: "https://accurate-fencing.biz",
      },
    ],
    pagination: {
      totalCount: 781770,
      maxPage: 389060,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |