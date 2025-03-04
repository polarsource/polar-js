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
      timestamp: new Date("2023-09-20T15:54:20.278Z"),
      name: "<value>",
      source: "user",
      organizationId: "<value>",
      customerId: "<value>",
      customer: {
        createdAt: new Date("2023-01-26T06:27:45.871Z"),
        modifiedAt: new Date("2025-12-05T13:35:01.303Z"),
        id: "<value>",
        metadata: {
          "key": 428712,
        },
        externalId: "<id>",
        email: "Halle54@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "United Kingdom",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://animated-intellect.name/",
      },
      externalCustomerId: "<id>",
    },
  ],
  pagination: {
    totalCount: 351869,
    maxPage: 488006,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Event](../../models/components/event.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |