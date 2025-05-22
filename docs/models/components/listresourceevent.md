# ListResourceEvent

## Example Usage

```typescript
import { ListResourceEvent } from "@polar-sh/sdk/models/components/listresourceevent.js";

let value: ListResourceEvent = {
  items: [
    {
      id: "<value>",
      timestamp: new Date("2024-06-18T03:11:30.752Z"),
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      customerId: "<value>",
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2025-09-28T16:35:58.850Z"),
        modifiedAt: new Date("2024-06-14T11:35:32.838Z"),
        metadata: {
          "key": 9800.02,
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "FR",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2024-07-07T22:03:46.538Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      externalCustomerId: "<id>",
      metadata: {
        meterId: "<id>",
      },
    },
  ],
  pagination: {
    totalCount: 627577,
    maxPage: 518943,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Event*[]                                           | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |