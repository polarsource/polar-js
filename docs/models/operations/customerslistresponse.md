# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-09-05T13:28:38.697Z"),
        modifiedAt: new Date("2024-06-30T11:25:29.230Z"),
        id: "<value>",
        metadata: {
          "key": 280175,
        },
        email: "Katheryn_Heidenreich8@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Pitcairn Islands",
        },
        taxId: [
          "id_npwp",
        ],
        organizationId: "<value>",
        avatarUrl: "https://oval-retrospectivity.org",
      },
    ],
    pagination: {
      totalCount: 790364,
      maxPage: 310549,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |