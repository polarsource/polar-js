# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations/customerslist.js";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-12-22T23:10:42.147Z"),
        modifiedAt: new Date("2024-03-05T11:11:45.978Z"),
        id: "<value>",
        metadata: {
          "key": 961541,
        },
        externalId: "<id>",
        email: "Brett_Bauch@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Latvia",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://rewarding-lady.biz/",
      },
    ],
    pagination: {
      totalCount: 751116,
      maxPage: 794385,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |