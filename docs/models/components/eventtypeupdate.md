# EventTypeUpdate

## Example Usage

```typescript
import { EventTypeUpdate } from "@polar-sh/sdk/models/components/eventtypeupdate.js";

let value: EventTypeUpdate = {
  label: "<value>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `label`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | The label for the event type.                                                                       |
| `labelPropertySelector`                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Property path to extract dynamic label from event metadata (e.g., 'subject' or 'metadata.subject'). |