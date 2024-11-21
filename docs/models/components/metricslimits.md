# MetricsLimits

Date limits to get metrics.

## Example Usage

```typescript
import { MetricsLimits } from "@polar-sh/sdk/models/components";
import { RFCDate } from "@polar-sh/sdk/types";

let value: MetricsLimits = {
  minDate: new RFCDate("2023-02-28"),
  intervals: {
    hour: {
      maxDays: 841210,
    },
    day: {
      maxDays: 637449,
    },
    week: {
      maxDays: 623460,
    },
    month: {
      maxDays: 103918,
    },
    year: {
      maxDays: 408205,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `minDate`                                                                              | [RFCDate](../../types/rfcdate.md)                                                      | :heavy_check_mark:                                                                     | Minimum date to get metrics.                                                           |
| `intervals`                                                                            | [components.MetricsIntervalsLimits](../../models/components/metricsintervalslimits.md) | :heavy_check_mark:                                                                     | Date interval limits to get metrics for each interval.                                 |