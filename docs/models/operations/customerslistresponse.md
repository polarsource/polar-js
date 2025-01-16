# CustomersListResponse

## Example Usage

```typescript
import { CustomersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-08-14T16:24:33.635Z"),
        modifiedAt: new Date("2023-09-11T15:13:22.763Z"),
        id: "<value>",
        metadata: {
          "key": 74838,
        },
        email: "Hailey_Kling91@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Mali",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://monstrous-ruin.net/",
      },
    ],
    pagination: {
      totalCount: 733953,
      maxPage: 203411,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCustomer](../../models/components/listresourcecustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |