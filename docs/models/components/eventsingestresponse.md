# EventsIngestResponse

## Example Usage

```typescript
import { EventsIngestResponse } from "@polar-sh/sdk/models/components/eventsingestresponse.js";

let value: EventsIngestResponse = {
  inserted: 61041,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `inserted`                          | *number*                            | :heavy_check_mark:                  | Number of events inserted.          |
| `duplicates`                        | *number*                            | :heavy_minus_sign:                  | Number of duplicate events skipped. |