# EventsListNamesResponse

## Example Usage

```typescript
import { EventsListNamesResponse } from "@polar-sh/sdk/models/operations/eventslistnames.js";

let value: EventsListNamesResponse = {
  result: {
    items: [
      {
        name: "<value>",
        occurrences: 412059,
        firstSeen: new Date("2025-09-17T08:10:38.555Z"),
        lastSeen: new Date("2024-03-07T21:28:00.890Z"),
      },
    ],
    pagination: {
      totalCount: 284659,
      maxPage: 504809,
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `result`                                                                             | [components.ListResourceEventName](../../models/components/listresourceeventname.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |