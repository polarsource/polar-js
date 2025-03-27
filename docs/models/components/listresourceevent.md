# ListResourceEvent

## Example Usage

```typescript
import { ListResourceEvent } from "@polar-sh/sdk/models/components/listresourceevent.js";

let value: ListResourceEvent = {
  items: [
    {
      metadata: {
        "key": false,
      },
      id: "<value>",
      timestamp: new Date("2024-11-12T14:45:50.022Z"),
      name: "<value>",
      source: "user",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      customerId: "<value>",
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2024-08-07T19:18:35.830Z"),
        modifiedAt: new Date("2024-10-09T04:06:47.415Z"),
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
          "FR61954506077",
          "eu_vat",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2023-01-31T20:09:40.406Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      externalCustomerId: "<id>",
    },
  ],
  pagination: {
    totalCount: 356994,
    maxPage: 773610,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Event](../../models/components/event.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |