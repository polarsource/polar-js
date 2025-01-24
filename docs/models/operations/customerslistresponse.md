# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-07-25T13:11:02.187Z"),
        modifiedAt: new Date("2023-11-25T16:13:50.771Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        email: "Allene.Marks97@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Cyprus",
        },
        taxId: [
          "ph_tin",
        ],
        organizationId: "<value>",
        avatarUrl: "https://unaware-information.com/",
      },
    ],
    pagination: {
      totalCount: 721823,
      maxPage: 263671,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |