# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components/metrics.js";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Dannie33",
    type: "scalar",
  },
  revenue: {
    slug: "<value>",
    displayName: "Cary.Walsh",
    type: "currency",
  },
  cumulativeRevenue: {
    slug: "<value>",
    displayName: "Ludie.Lakin",
    type: "scalar",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Russ48",
    type: "currency",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Greyson.Barrows",
    type: "scalar",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Carol_Keeling",
    type: "scalar",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Pasquale_Jakubowski42",
    type: "currency",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Nathan.Klocko29",
    type: "currency",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Rylee.Reichel91",
    type: "scalar",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Nedra30",
    type: "currency",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Queenie_Cole",
    type: "currency",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Creola76",
    type: "currency",
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