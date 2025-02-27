# ListResourceEvent

## Example Usage

```typescript
import { ListResourceEvent } from "@polar-sh/sdk/models/components/listresourceevent.js";

let value: ListResourceEvent = {
  items: [
    {
      metadata: {
        "key": 270279,
      },
      id: "<value>",
      timestamp: new Date("2023-10-06T00:10:21.444Z"),
      name: "<value>",
      source: "user",
      organizationId: "<value>",
      customerId: "<value>",
      customer: {
        createdAt: new Date("2025-01-05T15:25:48.435Z"),
        modifiedAt: new Date("2023-02-09T05:05:40.460Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        externalId: "<id>",
        email: "Kacie.Lowe56@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Turkey",
        },
        taxId: [
          "is_vat",
        ],
        organizationId: "<value>",
        avatarUrl: "https://pink-designation.com",
      },
      externalCustomerId: "<id>",
    },
  ],
  pagination: {
    totalCount: 889946,
    maxPage: 391395,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Event](../../models/components/event.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |