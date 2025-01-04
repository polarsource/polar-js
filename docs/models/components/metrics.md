# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Raymundo_Bashirian67",
    type: "scalar",
  },
  revenue: {
    slug: "<value>",
    displayName: "Granville_Harris",
    type: "scalar",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Sabina_Medhurst",
    type: "scalar",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Kathlyn_Schaden83",
    type: "currency",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Kody_Haley",
    type: "currency",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Foster_Corkery",
    type: "scalar",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Xavier13",
    type: "currency",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Ian_Berge",
    type: "scalar",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Magdalen51",
    type: "scalar",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Ana.Haag7",
    type: "currency",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Fredy.Schimmel",
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