# MetricsLimits

Date limits to get metrics.

## Example Usage

```typescript
import { MetricsLimits } from "@polar-sh/sdk/models/components";
import { RFCDate } from "@polar-sh/sdk/types";

let value: MetricsLimits = {
  minDate: new RFCDate("2022-09-11"),
  intervals: {
    hour: {
      maxDays: 470724,
    },
    day: {
      maxDays: 821046,
    },
    week: {
      maxDays: 142769,
    },
    month: {
      maxDays: 894928,
    },
    year: {
      maxDays: 447246,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `minDate`                                                                              | [RFCDate](../../types/rfcdate.md)                                                      | :heavy_check_mark:                                                                     | Minimum date to get metrics.                                                           |
| `intervals`                                                                            | [components.MetricsIntervalsLimits](../../models/components/metricsintervalslimits.md) | :heavy_check_mark:                                                                     | Date interval limits to get metrics for each interval.                                 |