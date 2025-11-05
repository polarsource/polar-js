# ListResourceEventName

## Example Usage

```typescript
import { ListResourceEventName } from "@polar-sh/sdk/models/components/listresourceeventname.js";

let value: ListResourceEventName = {
  items: [
    {
      name: "<value>",
      source: "system",
      occurrences: 155002,
      firstSeen: new Date("2025-04-29T10:50:42.537Z"),
      lastSeen: new Date("2024-11-19T04:30:57.304Z"),
    },
  ],
  pagination: {
    totalCount: 279990,
    maxPage: 718643,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.EventName](../../models/components/eventname.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |