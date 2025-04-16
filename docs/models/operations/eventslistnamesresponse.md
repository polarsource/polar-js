# EventsListNamesResponse

## Example Usage

```typescript
import { EventsListNamesResponse } from "@polar-sh/sdk/models/operations/eventslistnames.js";

let value: EventsListNamesResponse = {
  result: {
    items: [
      {
        name: "<value>",
        source: "system",
        occurrences: 903596,
        firstSeen: new Date("2024-03-07T21:28:00.890Z"),
        lastSeen: new Date("2023-11-08T23:40:18.040Z"),
      },
    ],
    pagination: {
      totalCount: 504809,
      maxPage: 238080,
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `result`                                                                             | [components.ListResourceEventName](../../models/components/listresourceeventname.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |