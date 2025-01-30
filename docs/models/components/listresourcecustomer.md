# ListResourceCustomer

## Example Usage

```typescript
import { ListResourceCustomer } from "@polar-sh/sdk/models/components/listresourcecustomer.js";

let value: ListResourceCustomer = {
  items: [
    {
      createdAt: new Date("2024-03-27T22:50:15.785Z"),
      modifiedAt: new Date("2023-04-13T11:45:19.275Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Manley.Ankunding@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Montserrat",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://minty-circumference.info/",
    },
  ],
  pagination: {
    totalCount: 886518,
    maxPage: 575198,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Customer](../../models/components/customer.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |