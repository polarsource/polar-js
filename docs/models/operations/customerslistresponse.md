# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-04-26T22:31:28.319Z"),
        modifiedAt: new Date("2023-03-22T14:18:41.379Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        email: "Jovany4@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Mauritius",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://formal-department.org",
      },
    ],
    pagination: {
      totalCount: 748730,
      maxPage: 493295,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |