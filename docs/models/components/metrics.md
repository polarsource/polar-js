# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Zula.Daniel",
    type: "currency",
  },
  revenue: {
    slug: "<value>",
    displayName: "Arjun_Kuhn",
    type: "currency",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Karlie80",
    type: "currency",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Colten.Tromp49",
    type: "scalar",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Laila_Kassulke",
    type: "scalar",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Clay_Hirthe",
    type: "currency",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Xzavier.Larson1",
    type: "currency",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Wava_Mitchell64",
    type: "scalar",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Ernestina.Abbott-Rippin",
    type: "scalar",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Alia.Bailey42",
    type: "scalar",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Freddy64",
    type: "scalar",
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