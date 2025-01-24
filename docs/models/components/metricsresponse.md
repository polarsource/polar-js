# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2023-08-14T23:12:22.090Z"),
      orders: 292291,
      revenue: 172693,
      cumulativeRevenue: 997982,
      averageOrderValue: 192181,
      oneTimeProducts: 700751,
      oneTimeProductsRevenue: 462072,
      newSubscriptions: 33295,
      newSubscriptionsRevenue: 81263,
      renewedSubscriptions: 929429,
      renewedSubscriptionsRevenue: 744543,
      activeSubscriptions: 546010,
      monthlyRecurringRevenue: 209465,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Adah17",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Lucious_Toy96",
      type: "scalar",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Theo27",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Avis.Crona61",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Leta_Waelchi",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Yoshiko7",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Susanna_Labadie",
      type: "scalar",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Ernie84",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Kyleigh3",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Cheyenne.Jacobi",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Loma_Stokes",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Larue.Lubowitz",
      type: "currency",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `periods`                                                            | [components.MetricPeriod](../../models/components/metricperiod.md)[] | :heavy_check_mark:                                                   | List of data for each timestamp.                                     |
| `metrics`                                                            | [components.Metrics](../../models/components/metrics.md)             | :heavy_check_mark:                                                   | N/A                                                                  |