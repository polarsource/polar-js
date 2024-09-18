# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Alessia.Heller39",
    type: "currency",
  },
  revenue: {
    slug: "<value>",
    displayName: "Shaina.Orn98",
    type: "currency",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Noble.McClure",
    type: "currency",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Ludie36",
    type: "currency",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Devin.Cole",
    type: "currency",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Jordan52",
    type: "currency",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Bianka23",
    type: "scalar",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Kyle.Witting60",
    type: "scalar",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Kole8",
    type: "currency",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Shanny_Wolff96",
    type: "scalar",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Joesph83",
    type: "currency",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `orders`                                               | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `revenue`                                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `averageOrderValue`                                    | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `oneTimeProducts`                                      | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `oneTimeProductsRevenue`                               | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `newSubscriptions`                                     | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `newSubscriptionsRevenue`                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `renewedSubscriptions`                                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `renewedSubscriptionsRevenue`                          | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `activeSubscriptions`                                  | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `monthlyRecurringRevenue`                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |