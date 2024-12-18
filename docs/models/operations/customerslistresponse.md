# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-04-19T15:54:08.667Z"),
        modifiedAt: new Date("2024-07-10T03:29:51.086Z"),
        id: "<value>",
        metadata: {
          "key": 927802,
        },
        email: "Mia68@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Honduras",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://impolite-hamburger.name/",
      },
    ],
    pagination: {
      totalCount: 115150,
      maxPage: 112606,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |