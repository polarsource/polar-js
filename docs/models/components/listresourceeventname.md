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
      firstSeen: new Date("2026-04-29T10:50:42.537Z"),
      lastSeen: new Date("2025-11-19T04:30:57.304Z"),
    },
  ],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.EventName](../../models/components/eventname.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |