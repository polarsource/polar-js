# ListResourceCustomer

## Example Usage

```typescript
import { ListResourceCustomer } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomer = {
  items: [
    {
      createdAt: new Date("2024-06-08T19:16:48.368Z"),
      modifiedAt: new Date("2023-10-08T06:12:11.011Z"),
      id: "<value>",
      metadata: {
        "key": 497351,
      },
      email: "Marshall12@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Ecuador",
      },
      taxId: [
        "kr_brn",
      ],
      organizationId: "<value>",
      avatarUrl: "https://joyful-skyscraper.org/",
    },
  ],
  pagination: {
    totalCount: 18165,
    maxPage: 146654,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Customer](../../models/components/customer.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |