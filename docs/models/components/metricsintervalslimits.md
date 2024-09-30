# MetricsIntervalsLimits

Date interval limits to get metrics for each interval.

## Example Usage

```typescript
import { MetricsIntervalsLimits } from "@polar-sh/sdk/models/components";

let value: MetricsIntervalsLimits = {
  hour: {
    maxDays: 742205,
  },
  day: {
    maxDays: 108725,
  },
  week: {
    maxDays: 471965,
  },
  month: {
    maxDays: 536704,
  },
  year: {
    maxDays: 821012,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `hour`                                                                             | [components.MetricsIntervalLimit](../../models/components/metricsintervallimit.md) | :heavy_check_mark:                                                                 | Limits for the hour interval.                                                      |
| `day`                                                                              | [components.MetricsIntervalLimit](../../models/components/metricsintervallimit.md) | :heavy_check_mark:                                                                 | Limits for the day interval.                                                       |
| `week`                                                                             | [components.MetricsIntervalLimit](../../models/components/metricsintervallimit.md) | :heavy_check_mark:                                                                 | Limits for the week interval.                                                      |
| `month`                                                                            | [components.MetricsIntervalLimit](../../models/components/metricsintervallimit.md) | :heavy_check_mark:                                                                 | Limits for the month interval.                                                     |
| `year`                                                                             | [components.MetricsIntervalLimit](../../models/components/metricsintervallimit.md) | :heavy_check_mark:                                                                 | Limits for the year interval.                                                      |