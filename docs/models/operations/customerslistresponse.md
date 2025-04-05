# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations/customerslist.js";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2023-10-01T13:07:01.348Z"),
        modifiedAt: new Date("2025-07-12T09:52:19.357Z"),
        metadata: {
          "key": false,
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "FR",
        },
        taxId: [
          "FR61954506077",
          "eu_vat",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2025-02-27T07:44:33.641Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
    ],
    pagination: {
      totalCount: 282423,
      maxPage: 468694,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |