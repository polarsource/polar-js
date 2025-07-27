# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components/metrics.js";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Maudie_Davis82",
    type: "currency",
  },
  revenue: {
    slug: "<value>",
    displayName: "Isobel.Hermiston",
    type: "scalar",
  },
  cumulativeRevenue: {
    slug: "<value>",
    displayName: "Anderson.Morar",
    type: "scalar",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Maggie0",
    type: "scalar",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Jamaal_Kuvalis",
    type: "percentage",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Eli_Kling8",
    type: "currency",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Raoul7",
    type: "percentage",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Fanny21",
    type: "percentage",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Addie_Glover75",
    type: "percentage",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Gust_Dooley55",
    type: "scalar",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Connie_Satterfield37",
    type: "scalar",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Vanessa_Hegmann14",
    type: "currency",
  },
  committedMonthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Dan_Morissette1",
    type: "percentage",
  },
  checkouts: {
    slug: "<value>",
    displayName: "Florence_Daniel12",
    type: "currency",
  },
  succeededCheckouts: {
    slug: "<value>",
    displayName: "Ellsworth_Kshlerin53",
    type: "percentage",
  },
  checkoutsConversion: {
    slug: "<value>",
    displayName: "Paul68",
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
| `committedMonthlyRecurringRevenue`                     | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `checkouts`                                            | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `succeededCheckouts`                                   | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `checkoutsConversion`                                  | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |