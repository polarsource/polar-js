# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-12-25T02:20:19.631Z"),
        modifiedAt: new Date("2022-10-10T12:16:52.345Z"),
        id: "<value>",
        metadata: {
          "key": 359870,
        },
        email: "Dewayne28@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Mali",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://massive-bonfire.com/",
      },
    ],
    pagination: {
      totalCount: 710705,
      maxPage: 742004,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |