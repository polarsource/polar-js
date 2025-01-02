# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Diamond83",
    type: "currency",
  },
  revenue: {
    slug: "<value>",
    displayName: "Katrine_Leannon47",
    type: "currency",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Ricardo78",
    type: "scalar",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Waylon84",
    type: "scalar",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Hailey.Schmitt",
    type: "scalar",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Katharina10",
    type: "scalar",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Amelie34",
    type: "scalar",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Gilda24",
    type: "currency",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Brandy.Corkery",
    type: "scalar",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Malika.Fay57",
    type: "scalar",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Ahmad66",
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