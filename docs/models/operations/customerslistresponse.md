# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-11-02T16:11:07.950Z"),
        modifiedAt: new Date("2023-09-17T16:26:01.820Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        email: "Tamia8@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Qatar",
        },
        taxId: [
          "ro_tin",
        ],
        organizationId: "<value>",
        avatarUrl: "https://cheerful-flame.net",
      },
    ],
    pagination: {
      totalCount: 734276,
      maxPage: 766757,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |