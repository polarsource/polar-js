# MetricsLimits

Date limits to get metrics.

## Example Usage

```typescript
import { MetricsLimits } from "@polar-sh/sdk/models/components/metricslimits.js";
import { RFCDate } from "@polar-sh/sdk/types/rfcdate.js";

let value: MetricsLimits = {
  minDate: new RFCDate("2026-11-10"),
  intervals: {
    hour: {
      minDays: 771853,
      maxDays: 42115,
    },
    day: {
      minDays: 503939,
      maxDays: 25026,
    },
    week: {
      minDays: 252923,
      maxDays: 565067,
    },
    month: {
      minDays: 287577,
      maxDays: 26681,
    },
    year: {
      minDays: 36222,
      maxDays: 969358,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `minDate`                                                                              | [RFCDate](../../types/rfcdate.md)                                                      | :heavy_check_mark:                                                                     | Minimum date to get metrics.                                                           |
| `intervals`                                                                            | [components.MetricsIntervalsLimits](../../models/components/metricsintervalslimits.md) | :heavy_check_mark:                                                                     | Date interval limits to get metrics for each interval.                                 |