# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations/customerslist.js";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-08-24T09:08:13.827Z"),
        modifiedAt: new Date("2025-11-14T10:02:56.411Z"),
        id: "<value>",
        metadata: {
          "key": 439430,
        },
        email: "Lizeth40@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Bhutan",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://frank-scenario.org",
      },
    ],
    pagination: {
      totalCount: 631083,
      maxPage: 654466,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |