# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations/customerslist.js";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-10-15T23:00:41.227Z"),
        modifiedAt: new Date("2025-03-23T08:39:37.206Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        email: "Braxton.Koch16@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Portugal",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://helpful-trolley.biz",
      },
    ],
    pagination: {
      totalCount: 968944,
      maxPage: 852730,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |