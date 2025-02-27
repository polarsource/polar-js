# ListResourceCustomer

## Example Usage

```typescript
import { ListResourceCustomer } from "@polar-sh/sdk/models/components/listresourcecustomer.js";

let value: ListResourceCustomer = {
  items: [
    {
      createdAt: new Date("2025-09-17T04:38:05.058Z"),
      modifiedAt: new Date("2023-08-01T17:02:23.069Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      externalId: "<id>",
      email: "Tyreek32@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Spain",
      },
      taxId: [
        "jp_trn",
      ],
      organizationId: "<value>",
      avatarUrl: "https://unsteady-median.info/",
    },
  ],
  pagination: {
    totalCount: 559499,
    maxPage: 104466,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Customer](../../models/components/customer.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |