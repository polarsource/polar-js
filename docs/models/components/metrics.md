# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components/metrics.js";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Flossie92",
    type: "scalar",
  },
  revenue: {
    slug: "<value>",
    displayName: "Halie_Rogahn",
    type: "currency",
  },
  cumulativeRevenue: {
    slug: "<value>",
    displayName: "Rosalia44",
    type: "scalar",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Betsy50",
    type: "scalar",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Annalise_Jenkins63",
    type: "currency",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Brenna.Trantow",
    type: "scalar",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Edison74",
    type: "scalar",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Lizzie_Krajcik",
    type: "scalar",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Jessika42",
    type: "scalar",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Cedrick0",
    type: "currency",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Marc_Rosenbaum35",
    type: "scalar",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Itzel.Howe19",
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