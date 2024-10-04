# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Shaniya_Murray9",
    type: "currency",
  },
  revenue: {
    slug: "<value>",
    displayName: "Ima.Abbott",
    type: "currency",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "John.Kassulke",
    type: "currency",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Lucie43",
    type: "scalar",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Cordie.Beier",
    type: "currency",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Nellie_Kertzmann",
    type: "currency",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Laron.Borer91",
    type: "currency",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Herta71",
    type: "currency",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Abigail93",
    type: "currency",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Felicity.Bartoletti",
    type: "scalar",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Coby_Ankunding9",
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