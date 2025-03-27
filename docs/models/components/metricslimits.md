# MetricsLimits

Date limits to get metrics.

## Example Usage

```typescript
import { MetricsLimits } from "@polar-sh/sdk/models/components/metricslimits.js";
import { RFCDate } from "@polar-sh/sdk/types/rfcdate.js";

let value: MetricsLimits = {
  minDate: new RFCDate("2025-04-25"),
  intervals: {
    hour: {
      maxDays: 413054,
    },
    day: {
      maxDays: 596865,
    },
    week: {
      maxDays: 546439,
    },
    month: {
      maxDays: 577606,
    },
    year: {
      maxDays: 478117,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `minDate`                                                                              | [RFCDate](../../types/rfcdate.md)                                                      | :heavy_check_mark:                                                                     | Minimum date to get metrics.                                                           |
| `intervals`                                                                            | [components.MetricsIntervalsLimits](../../models/components/metricsintervalslimits.md) | :heavy_check_mark:                                                                     | Date interval limits to get metrics for each interval.                                 |