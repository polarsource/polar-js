# ListResourceEventName

## Example Usage

```typescript
import { ListResourceEventName } from "@polar-sh/sdk/models/components/listresourceeventname.js";

let value: ListResourceEventName = {
  items: [
    {
      name: "<value>",
      source: "user",
      occurrences: 227328,
      firstSeen: new Date("2023-06-19T21:11:21.999Z"),
      lastSeen: new Date("2025-04-29T10:50:42.537Z"),
    },
  ],
  pagination: {
    totalCount: 627909,
    maxPage: 4335,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.EventName](../../models/components/eventname.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |