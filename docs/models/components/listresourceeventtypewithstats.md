# ListResourceEventTypeWithStats

## Example Usage

```typescript
import { ListResourceEventTypeWithStats } from "@polar-sh/sdk/models/components/listresourceeventtypewithstats.js";

let value: ListResourceEventTypeWithStats = {
  items: [
    {
      name: "<value>",
      label: "<value>",
      organizationId: "<value>",
      source: "system",
      occurrences: 142012,
      firstSeen: new Date("2024-02-13T04:20:19.105Z"),
      lastSeen: new Date("2025-04-26T23:23:58.924Z"),
    },
  ],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.EventTypeWithStats](../../models/components/eventtypewithstats.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `pagination`                                                                     | [components.Pagination](../../models/components/pagination.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |