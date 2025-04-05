# EventsIngest

## Example Usage

```typescript
import { EventsIngest } from "@polar-sh/sdk/models/components/eventsingest.js";

let value: EventsIngest = {
  events: [
    {
      name: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      customerId: "<value>",
    },
  ],
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `events`                  | *components.Events*[]     | :heavy_check_mark:        | List of events to ingest. |