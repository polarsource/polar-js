# EventTypeWithStats

## Example Usage

```typescript
import { EventTypeWithStats } from "@polar-sh/sdk/models/components/eventtypewithstats.js";

let value: EventTypeWithStats = {
  createdAt: new Date("2025-04-11T05:11:49.806Z"),
  modifiedAt: new Date("2025-03-05T12:05:43.907Z"),
  id: "<value>",
  name: "<value>",
  label: "<value>",
  organizationId: "<value>",
  source: "user",
  occurrences: 63616,
  firstSeen: new Date("2024-11-28T10:41:54.172Z"),
  lastSeen: new Date("2024-10-24T04:51:34.579Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the event type.                                                                   |
| `label`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The label for the event type.                                                                 |
| `labelPropertySelector`                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Property path to extract dynamic label from event metadata.                                   |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the event type.                                             |
| `source`                                                                                      | [components.EventSource](../../models/components/eventsource.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `occurrences`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of times the event has occurred.                                                       |
| `firstSeen`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The first time the event occurred.                                                            |
| `lastSeen`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The last time the event occurred.                                                             |