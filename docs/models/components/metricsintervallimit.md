# MetricsIntervalLimit

Date interval limit to get metrics for a given interval.

## Example Usage

```typescript
import { MetricsIntervalLimit } from "@polar-sh/sdk/models/components/metricsintervallimit.js";

let value: MetricsIntervalLimit = {
  minDays: 962322,
  maxDays: 563382,
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `minDays`                                 | *number*                                  | :heavy_check_mark:                        | Minimum number of days for this interval. |
| `maxDays`                                 | *number*                                  | :heavy_check_mark:                        | Maximum number of days for this interval. |