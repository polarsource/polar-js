# MetricsIntervalsLimits

Date interval limits to get metrics for each interval.

## Example Usage

```typescript
import { MetricsIntervalsLimits } from "@polar-sh/sdk/models/components";

let value: MetricsIntervalsLimits = {
  hour: {
    maxDays: 510703,
  },
  day: {
    maxDays: 323127,
  },
  week: {
    maxDays: 108379,
  },
  month: {
    maxDays: 592228,
  },
  year: {
    maxDays: 780332,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `hour`                                                                             | [components.MetricsIntervalLimit](../../models/components/metricsintervallimit.md) | :heavy_check_mark:                                                                 | Date interval limit to get metrics for a given interval.                           |
| `day`                                                                              | [components.MetricsIntervalLimit](../../models/components/metricsintervallimit.md) | :heavy_check_mark:                                                                 | Date interval limit to get metrics for a given interval.                           |
| `week`                                                                             | [components.MetricsIntervalLimit](../../models/components/metricsintervallimit.md) | :heavy_check_mark:                                                                 | Date interval limit to get metrics for a given interval.                           |
| `month`                                                                            | [components.MetricsIntervalLimit](../../models/components/metricsintervallimit.md) | :heavy_check_mark:                                                                 | Date interval limit to get metrics for a given interval.                           |
| `year`                                                                             | [components.MetricsIntervalLimit](../../models/components/metricsintervallimit.md) | :heavy_check_mark:                                                                 | Date interval limit to get metrics for a given interval.                           |