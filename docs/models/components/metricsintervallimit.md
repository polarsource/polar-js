# MetricsIntervalLimit

Date interval limit to get metrics for a given interval.

## Example Usage

```typescript
import { MetricsIntervalLimit } from "@polar-sh/sdk/models/components";

let value: MetricsIntervalLimit = {
  maxDays: 332249,
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `maxDays`                                 | *number*                                  | :heavy_check_mark:                        | Maximum number of days for this interval. |