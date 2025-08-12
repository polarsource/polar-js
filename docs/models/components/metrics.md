# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components/metrics.js";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Keyshawn_Beer61",
    type: "currency",
  },
  revenue: {
    slug: "<value>",
    displayName: "Heidi37",
    type: "scalar",
  },
  netRevenue: {
    slug: "<value>",
    displayName: "Talon50",
    type: "percentage",
  },
  cumulativeRevenue: {
    slug: "<value>",
    displayName: "Kory.Gulgowski",
    type: "scalar",
  },
  netCumulativeRevenue: {
    slug: "<value>",
    displayName: "Dax_Schulist",
    type: "scalar",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Oswaldo74",
    type: "scalar",
  },
  netAverageOrderValue: {
    slug: "<value>",
    displayName: "Monserrate_Adams",
    type: "percentage",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Casper20",
    type: "currency",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Adell77",
    type: "currency",
  },
  oneTimeProductsNetRevenue: {
    slug: "<value>",
    displayName: "Cyril34",
    type: "scalar",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Clint61",
    type: "scalar",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Elouise.Herzog-Kuphal93",
    type: "scalar",
  },
  newSubscriptionsNetRevenue: {
    slug: "<value>",
    displayName: "Gerald.Medhurst",
    type: "scalar",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Mekhi36",
    type: "percentage",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Grant_McKenzie32",
    type: "percentage",
  },
  renewedSubscriptionsNetRevenue: {
    slug: "<value>",
    displayName: "Ahmed_Gulgowski",
    type: "percentage",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Mya26",
    type: "scalar",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Kristy_Bayer",
    type: "currency",
  },
  committedMonthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Peter99",
    type: "percentage",
  },
  checkouts: {
    slug: "<value>",
    displayName: "Jaiden.Gutmann",
    type: "currency",
  },
  succeededCheckouts: {
    slug: "<value>",
    displayName: "Abdullah_Weber",
    type: "percentage",
  },
  checkoutsConversion: {
    slug: "<value>",
    displayName: "Jerrold_Spinka",
    type: "percentage",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `orders`                                               | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `revenue`                                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `netRevenue`                                           | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `cumulativeRevenue`                                    | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `netCumulativeRevenue`                                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `averageOrderValue`                                    | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `netAverageOrderValue`                                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `oneTimeProducts`                                      | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `oneTimeProductsRevenue`                               | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `oneTimeProductsNetRevenue`                            | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `newSubscriptions`                                     | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `newSubscriptionsRevenue`                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `newSubscriptionsNetRevenue`                           | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `renewedSubscriptions`                                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `renewedSubscriptionsRevenue`                          | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `renewedSubscriptionsNetRevenue`                       | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `activeSubscriptions`                                  | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `monthlyRecurringRevenue`                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `committedMonthlyRecurringRevenue`                     | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `checkouts`                                            | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `succeededCheckouts`                                   | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `checkoutsConversion`                                  | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |