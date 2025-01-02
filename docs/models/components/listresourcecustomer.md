# ListResourceCustomer

## Example Usage

```typescript
import { ListResourceCustomer } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomer = {
  items: [
    {
      createdAt: new Date("2025-05-29T02:01:29.899Z"),
      modifiedAt: new Date("2024-06-08T02:59:50.162Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Rebeka.Kuvalis@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Botswana",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://winged-birdcage.name/",
    },
  ],
  pagination: {
    totalCount: 920860,
    maxPage: 76856,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Customer](../../models/components/customer.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |