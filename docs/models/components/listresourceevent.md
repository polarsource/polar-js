# ListResourceEvent

## Example Usage

```typescript
import { ListResourceEvent } from "@polar-sh/sdk/models/components/listresourceevent.js";

let value: ListResourceEvent = {
  items: [
    {
      metadata: {
        "key": 618463,
      },
      id: "<value>",
      timestamp: new Date("2023-07-24T03:40:16.074Z"),
      name: "<value>",
      source: "system",
      organizationId: "<value>",
      customerId: "<value>",
      customer: {
        createdAt: new Date("2025-06-16T07:11:59.696Z"),
        modifiedAt: new Date("2025-06-14T17:40:30.188Z"),
        id: "<value>",
        metadata: {
          "key": 467406,
        },
        email: "Izaiah66@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Canada",
        },
        taxId: [
          "ro_tin",
        ],
        organizationId: "<value>",
        avatarUrl: "https://quarrelsome-spirit.name",
      },
      externalCustomerId: "<id>",
    },
  ],
  pagination: {
    totalCount: 647383,
    maxPage: 976771,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Event](../../models/components/event.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |