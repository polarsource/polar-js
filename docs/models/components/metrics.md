# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components/metrics.js";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Prince37",
    type: "scalar",
  },
  revenue: {
    slug: "<value>",
    displayName: "Ara85",
    type: "scalar",
  },
  cumulativeRevenue: {
    slug: "<value>",
    displayName: "Kamron_Langosh",
    type: "currency",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Kobe89",
    type: "currency",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Amiya.Williamson",
    type: "scalar",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Mortimer20",
    type: "currency",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Wilfredo_Hagenes5",
    type: "currency",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Nakia.Gutkowski",
    type: "currency",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Ole.Marquardt7",
    type: "scalar",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Dannie33",
    type: "scalar",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Cary.Walsh",
    type: "currency",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Ludie.Lakin",
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