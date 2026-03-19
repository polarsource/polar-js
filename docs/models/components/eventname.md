# EventName

## Example Usage

```typescript
import { EventName } from "@polar-sh/sdk/models/components/eventname.js";

let value: EventName = {
  name: "<value>",
  source: "user",
  occurrences: 195850,
  firstSeen: new Date("2025-12-21T07:07:24.710Z"),
  lastSeen: new Date("2026-02-05T23:11:22.498Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the event.                                                                        |
| `source`                                                                                      | [components.EventSource](../../models/components/eventsource.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `occurrences`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of times the event has occurred.                                                       |
| `firstSeen`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The first time the event occurred.                                                            |
| `lastSeen`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The last time the event occurred.                                                             |