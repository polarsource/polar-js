# ListResourceCustomer

## Example Usage

```typescript
import { ListResourceCustomer } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomer = {
  items: [
    {
      createdAt: new Date("2023-05-07T03:52:19.100Z"),
      modifiedAt: new Date("2025-10-02T20:36:49.150Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Rod.Rath@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Mauritius",
      },
      taxId: [
        "ca_pst_sk",
      ],
      organizationId: "<value>",
      avatarUrl: "https://functional-chiffonier.name",
    },
  ],
  pagination: {
    totalCount: 524410,
    maxPage: 291533,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Customer](../../models/components/customer.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |