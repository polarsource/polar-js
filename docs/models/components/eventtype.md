# EventType

## Example Usage

```typescript
import { EventType } from "@polar-sh/sdk/models/components/eventtype.js";

let value: EventType = {
  createdAt: new Date("2024-01-13T10:00:39.769Z"),
  modifiedAt: new Date("2023-10-31T04:54:29.522Z"),
  id: "<value>",
  name: "<value>",
  label: "<value>",
  organizationId: "<value>",
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