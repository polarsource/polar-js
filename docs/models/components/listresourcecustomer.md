# ListResourceCustomer

## Example Usage

```typescript
import { ListResourceCustomer } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomer = {
  items: [
    {
      createdAt: new Date("2024-05-28T19:17:18.923Z"),
      modifiedAt: new Date("2023-08-14T21:39:34.088Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Garth.Durgan@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Bouvet Island",
      },
      taxId: [
        "ng_tin",
      ],
      organizationId: "<value>",
      avatarUrl: "https://naughty-citizen.name/",
    },
  ],
  pagination: {
    totalCount: 771253,
    maxPage: 413054,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Customer](../../models/components/customer.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |