# EventTypesListResponse

## Example Usage

```typescript
import { EventTypesListResponse } from "@polar-sh/sdk/models/operations/eventtypeslist.js";

let value: EventTypesListResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [components.ListResourceEventTypeWithStats](../../models/components/listresourceeventtypewithstats.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |