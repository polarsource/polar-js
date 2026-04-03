# MetricsUpdateDashboardRequest

## Example Usage

```typescript
import { MetricsUpdateDashboardRequest } from "@polar-sh/sdk/models/operations/metricsupdatedashboard.js";

let value: MetricsUpdateDashboardRequest = {
  id: "<value>",
  metricDashboardUpdate: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The metric dashboard ID.                                                             |
| `metricDashboardUpdate`                                                              | [components.MetricDashboardUpdate](../../models/components/metricdashboardupdate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |