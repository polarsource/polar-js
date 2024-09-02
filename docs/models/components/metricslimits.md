# MetricsLimits

Date limits to get metrics.

## Example Usage

```typescript
import { MetricsLimits } from "@polar-sh/sdk/models/components";
import { RFCDate } from "@polar-sh/sdk/types";

let value: MetricsLimits = {
    minDate: new RFCDate("2024-02-17"),
    intervals: {
        hour: {
            maxDays: 537236,
        },
        day: {
            maxDays: 954334,
        },
        week: {
            maxDays: 455579,
        },
        month: {
            maxDays: 351936,
        },
        year: {
            maxDays: 600193,
        },
    },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `minDate`                                                                              | [RFCDate](../../types/rfcdate.md)                                                      | :heavy_check_mark:                                                                     | Minimum date to get metrics.                                                           |
| `intervals`                                                                            | [components.MetricsIntervalsLimits](../../models/components/metricsintervalslimits.md) | :heavy_check_mark:                                                                     | Limits for each interval.                                                              |