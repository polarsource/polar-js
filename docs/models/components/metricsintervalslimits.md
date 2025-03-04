# MetricsIntervalsLimits

Date interval limits to get metrics for each interval.

## Example Usage

```typescript
import { MetricsIntervalsLimits } from "@polar-sh/sdk/models/components/metricsintervalslimits.js";

let value: MetricsIntervalsLimits = {
  hour: {
    maxDays: 164585,
  },
  day: {
    maxDays: 569596,
  },
  week: {
    maxDays: 940497,
  },
  month: {
    maxDays: 966607,
  },
  year: {
    maxDays: 844253,
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