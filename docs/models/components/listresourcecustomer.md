# ListResourceCustomer

## Example Usage

```typescript
import { ListResourceCustomer } from "@polar-sh/sdk/models/components/listresourcecustomer.js";

let value: ListResourceCustomer = {
  items: [
    {
      createdAt: new Date("2024-02-18T12:34:13.180Z"),
      modifiedAt: new Date("2023-09-20T03:15:46.900Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      externalId: "<id>",
      email: "Jannie.Swaniawski46@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "South Georgia and the South Sandwich Islands",
      },
      taxId: [
        "my_sst",
      ],
      organizationId: "<value>",
      avatarUrl: "https://agreeable-eternity.com/",
    },
  ],
  pagination: {
    totalCount: 29928,
    maxPage: 985129,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Customer](../../models/components/customer.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |