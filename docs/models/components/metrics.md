# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components/metrics.js";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Laverna_Gottlieb",
    type: "currency",
  },
  revenue: {
    slug: "<value>",
    displayName: "Katelin_Simonis43",
    type: "currency",
  },
  cumulativeRevenue: {
    slug: "<value>",
    displayName: "Aron61",
    type: "scalar",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Pearlie.Padberg",
    type: "currency",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Sylvia.OKeefe48",
    type: "currency",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Hayden43",
    type: "currency",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Dorothy14",
    type: "scalar",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Ludie95",
    type: "currency",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Esteban67",
    type: "scalar",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Carlotta.Kirlin83",
    type: "scalar",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Camden7",
    type: "scalar",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Justen.Metz",
    type: "scalar",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `orders`                                               | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `revenue`                                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `cumulativeRevenue`                                    | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `averageOrderValue`                                    | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `oneTimeProducts`                                      | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `oneTimeProductsRevenue`                               | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `newSubscriptions`                                     | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `newSubscriptionsRevenue`                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `renewedSubscriptions`                                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `renewedSubscriptionsRevenue`                          | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `activeSubscriptions`                                  | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `monthlyRecurringRevenue`                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |