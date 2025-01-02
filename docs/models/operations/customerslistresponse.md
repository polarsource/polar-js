# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-09-25T21:09:30.950Z"),
        modifiedAt: new Date("2025-10-30T14:04:55.140Z"),
        id: "<value>",
        metadata: {
          "key": 291293,
        },
        email: "Shane_Schmitt81@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Ghana",
        },
        taxId: [
          "pe_ruc",
        ],
        organizationId: "<value>",
        avatarUrl: "https://smoggy-basket.net",
      },
    ],
    pagination: {
      totalCount: 85912,
      maxPage: 822406,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |