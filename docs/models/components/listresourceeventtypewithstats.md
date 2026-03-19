# ListResourceEventTypeWithStats

## Example Usage

```typescript
import { ListResourceEventTypeWithStats } from "@polar-sh/sdk/models/components/listresourceeventtypewithstats.js";

let value: ListResourceEventTypeWithStats = {
  items: [
    {
      createdAt: new Date("2025-03-03T00:57:24.181Z"),
      modifiedAt: new Date("2024-02-13T04:20:19.105Z"),
      id: "<value>",
      name: "<value>",
      label: "<value>",
      organizationId: "<value>",
      source: "system",
      occurrences: 506393,
      firstSeen: new Date("2024-08-25T01:57:20.155Z"),
      lastSeen: new Date("2026-09-11T10:49:11.442Z"),
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