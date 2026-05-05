# EventTypeWithStats

## Example Usage

```typescript
import { EventTypeWithStats } from "@polar-sh/sdk/models/components/eventtypewithstats.js";

let value: EventTypeWithStats = {
  name: "<value>",
  label: "<value>",
  organizationId: "<value>",
  source: "system",
  occurrences: 538589,
  firstSeen: new Date("2025-03-05T12:05:43.907Z"),
  lastSeen: new Date("2025-11-26T08:11:36.257Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the event type. Null for system event types.                                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Creation timestamp of the event type. Null for system event types.                            |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Last modification timestamp of the event type. Null for system event types.                   |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the event type.                                                                   |
| `label`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The label for the event type.                                                                 |
| `labelPropertySelector`                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Property path to extract dynamic label from event metadata.                                   |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the event type.                                             |
| `source`                                                                                      | [components.EventSource](../../models/components/eventsource.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `occurrences`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of times the event has occurred.                                                       |
| `firstSeen`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The first time the event occurred.                                                            |
| `lastSeen`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The last time the event occurred.                                                             |