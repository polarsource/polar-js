# Metric

Information about a metric.

## Example Usage

```typescript
import { Metric } from "@polar-sh/sdk/models/components/metric.js";

let value: Metric = {
  slug: "<value>",
  displayName: "Shea24",
  type: "currency",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `slug`                                                         | *string*                                                       | :heavy_check_mark:                                             | Unique identifier for the metric.                              |
| `displayName`                                                  | *string*                                                       | :heavy_check_mark:                                             | Human-readable name for the metric.                            |
| `type`                                                         | [components.MetricType](../../models/components/metrictype.md) | :heavy_check_mark:                                             | N/A                                                            |