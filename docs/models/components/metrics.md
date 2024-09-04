# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components";

let value: Metrics = {
    orders: {
        slug: "<value>",
        displayName: "Irving_Orn",
        type: "currency",
    },
    revenue: {
        slug: "<value>",
        displayName: "Onie_Welch40",
        type: "scalar",
    },
    averageOrderValue: {
        slug: "<value>",
        displayName: "Sonia79",
        type: "currency",
    },
    oneTimeProducts: {
        slug: "<value>",
        displayName: "Mariam53",
        type: "scalar",
    },
    oneTimeProductsRevenue: {
        slug: "<value>",
        displayName: "Ollie_Cummerata72",
        type: "scalar",
    },
    newSubscriptions: {
        slug: "<value>",
        displayName: "Jayme49",
        type: "scalar",
    },
    newSubscriptionsRevenue: {
        slug: "<value>",
        displayName: "Orlando.Leuschke13",
        type: "currency",
    },
    renewedSubscriptions: {
        slug: "<value>",
        displayName: "Hertha.Gutkowski81",
        type: "currency",
    },
    renewedSubscriptionsRevenue: {
        slug: "<value>",
        displayName: "Bartholome78",
        type: "scalar",
    },
    activeSubscriptions: {
        slug: "<value>",
        displayName: "Delia42",
        type: "scalar",
    },
    monthlyRecurringRevenue: {
        slug: "<value>",
        displayName: "Berenice.Thiel",
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