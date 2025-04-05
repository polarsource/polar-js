# ListResourceEvent

## Example Usage

```typescript
import { ListResourceEvent } from "@polar-sh/sdk/models/components/listresourceevent.js";

let value: ListResourceEvent = {
  items: [
    {
      metadata: {
        "key": 931177,
      },
      id: "<value>",
      timestamp: new Date("2024-06-18T03:11:30.752Z"),
      name: "<value>",
      source: "user",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      customerId: "<value>",
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2024-06-14T11:35:32.838Z"),
        modifiedAt: new Date("2024-12-21T04:51:31.301Z"),
        metadata: {
          "key": false,
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
| `items`                                                        | [components.Event](../../models/components/event.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |