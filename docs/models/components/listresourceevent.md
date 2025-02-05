# ListResourceEvent

## Example Usage

```typescript
import { ListResourceEvent } from "@polar-sh/sdk/models/components/listresourceevent.js";

let value: ListResourceEvent = {
  items: [
    {
      metadata: {
        "key": "<value>",
      },
      id: "<value>",
      timestamp: new Date("2023-05-05T13:10:17.632Z"),
      name: "<value>",
      source: "system",
      organizationId: "<value>",
      customerId: "<value>",
      externalCustomerId: "<id>",
    },
  ],
  pagination: {
    totalCount: 284949,
    maxPage: 367728,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Event](../../models/components/event.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |