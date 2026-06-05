# EventTypesListResponse

## Example Usage

```typescript
import { EventTypesListResponse } from "@polar-sh/sdk/models/operations/eventtypeslist.js";

let value: EventTypesListResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [components.ListResourceEventTypeWithStats](../../models/components/listresourceeventtypewithstats.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |