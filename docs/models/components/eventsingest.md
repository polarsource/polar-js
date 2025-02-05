# EventsIngest

## Example Usage

```typescript
import { EventsIngest } from "@polar-sh/sdk/models/components/eventsingest.js";

let value: EventsIngest = {
  events: [
    {
      name: "<value>",
      externalCustomerId: "<id>",
    },
  ],
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `events`                  | *components.Events*[]     | :heavy_check_mark:        | List of events to ingest. |