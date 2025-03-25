# MetricsLimits

Date limits to get metrics.

## Example Usage

```typescript
import { MetricsLimits } from "@polar-sh/sdk/models/components/metricslimits.js";
import { RFCDate } from "@polar-sh/sdk/types/rfcdate.js";

let value: MetricsLimits = {
  minDate: new RFCDate("2024-12-25"),
  intervals: {
    hour: {
      maxDays: 499329,
    },
    day: {
      maxDays: 341772,
    },
    week: {
      maxDays: 192808,
    },
    month: {
      maxDays: 464473,
    },
    year: {
      maxDays: 375553,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `minDate`                                                                              | [RFCDate](../../types/rfcdate.md)                                                      | :heavy_check_mark:                                                                     | Minimum date to get metrics.                                                           |
| `intervals`                                                                            | [components.MetricsIntervalsLimits](../../models/components/metricsintervalslimits.md) | :heavy_check_mark:                                                                     | Date interval limits to get metrics for each interval.                                 |