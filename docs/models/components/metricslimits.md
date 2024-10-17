# MetricsLimits

Date limits to get metrics.

## Example Usage

```typescript
import { MetricsLimits } from "@polar-sh/sdk/models/components";
import { RFCDate } from "@polar-sh/sdk/types";

let value: MetricsLimits = {
  minDate: new RFCDate("2023-03-24"),
  intervals: {
    hour: {
      maxDays: 2726,
    },
    day: {
      maxDays: 803114,
    },
    week: {
      maxDays: 236280,
    },
    month: {
      maxDays: 83016,
    },
    year: {
      maxDays: 660769,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `minDate`                                                                              | [RFCDate](../../types/rfcdate.md)                                                      | :heavy_check_mark:                                                                     | Minimum date to get metrics.                                                           |
| `intervals`                                                                            | [components.MetricsIntervalsLimits](../../models/components/metricsintervalslimits.md) | :heavy_check_mark:                                                                     | Date interval limits to get metrics for each interval.                                 |