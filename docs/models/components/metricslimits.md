# MetricsLimits

Date limits to get metrics.

## Example Usage

```typescript
import { MetricsLimits } from "@polar-sh/sdk/models/components/metricslimits.js";
import { RFCDate } from "@polar-sh/sdk/types/rfcdate.js";

let value: MetricsLimits = {
  minDate: new RFCDate("2024-03-29"),
  intervals: {
    hour: {
      maxDays: 840168,
    },
    day: {
      maxDays: 390200,
    },
    week: {
      maxDays: 51733,
    },
    month: {
      maxDays: 165911,
    },
    year: {
      maxDays: 669678,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `minDate`                                                                              | [RFCDate](../../types/rfcdate.md)                                                      | :heavy_check_mark:                                                                     | Minimum date to get metrics.                                                           |
| `intervals`                                                                            | [components.MetricsIntervalsLimits](../../models/components/metricsintervalslimits.md) | :heavy_check_mark:                                                                     | Date interval limits to get metrics for each interval.                                 |