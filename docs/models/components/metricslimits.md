# MetricsLimits

Date limits to get metrics.

## Example Usage

```typescript
import { MetricsLimits } from "@polar-sh/sdk/models/components/metricslimits.js";
import { RFCDate } from "@polar-sh/sdk/types/rfcdate.js";

let value: MetricsLimits = {
  minDate: new RFCDate("2024-06-06"),
  intervals: {
    hour: {
      maxDays: 435961,
    },
    day: {
      maxDays: 846880,
    },
    week: {
      maxDays: 831476,
    },
    month: {
      maxDays: 133984,
    },
    year: {
      maxDays: 811745,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `minDate`                                                                              | [RFCDate](../../types/rfcdate.md)                                                      | :heavy_check_mark:                                                                     | Minimum date to get metrics.                                                           |
| `intervals`                                                                            | [components.MetricsIntervalsLimits](../../models/components/metricsintervalslimits.md) | :heavy_check_mark:                                                                     | Date interval limits to get metrics for each interval.                                 |