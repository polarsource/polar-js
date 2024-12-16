# MetricsLimits

Date limits to get metrics.

## Example Usage

```typescript
import { MetricsLimits } from "@polar-sh/sdk/models/components";
import { RFCDate } from "@polar-sh/sdk/types";

let value: MetricsLimits = {
  minDate: new RFCDate("2022-05-08"),
  intervals: {
    hour: {
      maxDays: 989474,
    },
    day: {
      maxDays: 200301,
    },
    week: {
      maxDays: 80904,
    },
    month: {
      maxDays: 656811,
    },
    year: {
      maxDays: 673487,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `minDate`                                                                              | [RFCDate](../../types/rfcdate.md)                                                      | :heavy_check_mark:                                                                     | Minimum date to get metrics.                                                           |
| `intervals`                                                                            | [components.MetricsIntervalsLimits](../../models/components/metricsintervalslimits.md) | :heavy_check_mark:                                                                     | Date interval limits to get metrics for each interval.                                 |