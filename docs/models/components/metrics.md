# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components/metrics.js";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Carli17",
    type: "percentage",
  },
  revenue: {
    slug: "<value>",
    displayName: "Coleman_Kirlin",
    type: "percentage",
  },
  cumulativeRevenue: {
    slug: "<value>",
    displayName: "Keyshawn_Beer61",
    type: "currency",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Heidi37",
    type: "scalar",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Talon50",
    type: "percentage",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Kory.Gulgowski",
    type: "scalar",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Dax_Schulist",
    type: "scalar",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Oswaldo74",
    type: "scalar",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Monserrate_Adams",
    type: "percentage",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Casper20",
    type: "currency",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Adell77",
    type: "currency",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Cyril34",
    type: "scalar",
  },
  checkouts: {
    slug: "<value>",
    displayName: "Clint61",
    type: "scalar",
  },
  succeededCheckouts: {
    slug: "<value>",
    displayName: "Elouise.Herzog-Kuphal93",
    type: "scalar",
  },
  checkoutsConversion: {
    slug: "<value>",
    displayName: "Gerald.Medhurst",
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
| `checkouts`                                            | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `succeededCheckouts`                                   | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `checkoutsConversion`                                  | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |