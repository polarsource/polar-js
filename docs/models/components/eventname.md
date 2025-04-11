# EventName

## Example Usage

```typescript
import { EventName } from "@polar-sh/sdk/models/components/eventname.js";

let value: EventName = {
  name: "<value>",
  occurrences: 765178,
  firstSeen: new Date("2023-08-03T15:38:24.183Z"),
  lastSeen: new Date("2024-12-21T07:07:24.710Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the event.                                                                        |
| `occurrences`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of times the event has occurred.                                                       |
| `firstSeen`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The first time the event occurred.                                                            |
| `lastSeen`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The last time the event occurred.                                                             |