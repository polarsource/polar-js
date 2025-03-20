# ListResourceCustomer

## Example Usage

```typescript
import { ListResourceCustomer } from "@polar-sh/sdk/models/components/listresourcecustomer.js";

let value: ListResourceCustomer = {
  items: [
    {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-04-25T11:53:31.235Z"),
      modifiedAt: new Date("2023-05-03T03:10:03.746Z"),
      metadata: {
        "key": false,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-09-02T17:41:59.365Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
  ],
  pagination: {
    totalCount: 486862,
    maxPage: 555733,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Customer](../../models/components/customer.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |