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
      externalCustomerId: "<id>",
    },
  ],
  pagination: {
    totalCount: 818705,
    maxPage: 817278,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Event](../../models/components/event.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |