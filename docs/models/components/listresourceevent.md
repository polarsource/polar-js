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
      timestamp: new Date("2025-04-15T01:30:51.901Z"),
      name: "<value>",
      source: "user",
      organizationId: "<value>",
      customerId: "<value>",
      customer: {
        createdAt: new Date("2025-07-23T04:37:56.095Z"),
        modifiedAt: new Date("2023-05-15T11:47:05.174Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        email: "Brenda.Nikolaus@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Democratic People's Republic of Korea",
        },
        taxId: [
          "au_arn",
        ],
        organizationId: "<value>",
        avatarUrl: "https://obvious-meatloaf.biz/",
      },
      externalCustomerId: "<id>",
    },
  ],
  pagination: {
    totalCount: 92965,
    maxPage: 209551,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Event](../../models/components/event.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |