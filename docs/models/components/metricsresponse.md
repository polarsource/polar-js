# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2023-08-05T09:00:15.814Z"),
      orders: 773381,
      revenue: 832596,
      averageOrderValue: 957425,
      oneTimeProducts: 995167,
      oneTimeProductsRevenue: 552256,
      newSubscriptions: 240787,
      newSubscriptionsRevenue: 519896,
      renewedSubscriptions: 736032,
      renewedSubscriptionsRevenue: 476668,
      activeSubscriptions: 272310,
      monthlyRecurringRevenue: 822093,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Ricardo78",
      type: "scalar",
    },
    revenue: {
      slug: "<value>",
      displayName: "Waylon84",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Hailey.Schmitt",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Katharina10",
      type: "scalar",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Amelie34",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Gilda24",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Brandy.Corkery",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Malika.Fay57",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Ahmad66",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Carlos_Tremblay",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Solon.Ortiz",
      type: "scalar",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `periods`                                                            | [components.MetricPeriod](../../models/components/metricperiod.md)[] | :heavy_check_mark:                                                   | List of data for each timestamp.                                     |
| `metrics`                                                            | [components.Metrics](../../models/components/metrics.md)             | :heavy_check_mark:                                                   | N/A                                                                  |