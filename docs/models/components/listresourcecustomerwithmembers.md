# ListResourceCustomerWithMembers

## Example Usage

```typescript
import { ListResourceCustomerWithMembers } from "@polar-sh/sdk/models/components/listresourcecustomerwithmembers.js";

let value: ListResourceCustomerWithMembers = {
  items: [
    {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-05-03T07:25:03.229Z"),
      modifiedAt: new Date("2024-01-28T19:57:22.709Z"),
      metadata: {
        "key": 5548.12,
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
      deletedAt: new Date("2024-07-01T11:24:39.161Z"),
      members: [
        {
          id: "<value>",
          createdAt: new Date("2024-08-01T07:55:55.149Z"),
          modifiedAt: new Date("2024-11-08T18:04:44.616Z"),
          customerId: "<value>",
          email: "member@example.com",
          name: "Jane Doe",
          externalId: "usr_1337",
          role: "member",
        },
      ],
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
  ],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `items`                                                                            | [components.CustomerWithMembers](../../models/components/customerwithmembers.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `pagination`                                                                       | [components.Pagination](../../models/components/pagination.md)                     | :heavy_check_mark:                                                                 | N/A                                                                                |