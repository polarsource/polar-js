# MetricsIntervalLimit

Date interval limit to get metrics for a given interval.

## Example Usage

```typescript
import { MetricsIntervalLimit } from "@polar-sh/sdk/models/components/metricsintervallimit.js";

let value: MetricsIntervalLimit = {
  maxDays: 388445,
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `maxDays`                                 | *number*                                  | :heavy_check_mark:                        | Maximum number of days for this interval. |