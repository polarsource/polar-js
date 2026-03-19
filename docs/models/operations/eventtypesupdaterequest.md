# EventTypesUpdateRequest

## Example Usage

```typescript
import { EventTypesUpdateRequest } from "@polar-sh/sdk/models/operations/eventtypesupdate.js";

let value: EventTypesUpdateRequest = {
  id: "<value>",
  eventTypeUpdate: {
    label: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | The event type ID.                                                       |
| `eventTypeUpdate`                                                        | [components.EventTypeUpdate](../../models/components/eventtypeupdate.md) | :heavy_check_mark:                                                       | N/A                                                                      |