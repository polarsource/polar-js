# ListResourceEvent

## Example Usage

```typescript
import { ListResourceEvent } from "@polar-sh/sdk/models/components/listresourceevent.js";

let value: ListResourceEvent = {
  items: [
    {
      metadata: {
        "key": 611534,
      },
      id: "<value>",
      timestamp: new Date("2023-11-16T09:23:24.153Z"),
      name: "<value>",
      source: "system",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      customerId: "<value>",
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2024-02-24T16:19:54.015Z"),
        modifiedAt: new Date("2023-08-13T04:05:41.912Z"),
        metadata: {
          "key": "<value>",
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "SE",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      externalCustomerId: "<id>",
    },
  ],
  pagination: {
    totalCount: 109969,
    maxPage: 505490,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Event](../../models/components/event.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |