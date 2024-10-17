# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Lloyd.Rodriguez57",
    type: "scalar",
  },
  revenue: {
    slug: "<value>",
    displayName: "Wilhelm49",
    type: "scalar",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Mariane.Thiel3",
    type: "currency",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Cristopher.Bednar83",
    type: "currency",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Bert.Sawayn",
    type: "scalar",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Cortney.Pollich28",
    type: "scalar",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Alice.Jakubowski48",
    type: "scalar",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Landen_Koepp13",
    type: "currency",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Greta.Feeney82",
    type: "currency",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Isadore_Nicolas82",
    type: "scalar",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Diamond83",
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