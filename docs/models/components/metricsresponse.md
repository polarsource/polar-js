# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2023-04-13T08:13:23.724Z"),
      orders: 119158,
      revenue: 817785,
      cumulativeRevenue: 441969,
      averageOrderValue: 802870,
      oneTimeProducts: 150,
      oneTimeProductsRevenue: 115028,
      newSubscriptions: 368343,
      newSubscriptionsRevenue: 397657,
      renewedSubscriptions: 833758,
      renewedSubscriptionsRevenue: 509783,
      activeSubscriptions: 917965,
      monthlyRecurringRevenue: 424698,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Annalise_Jenkins63",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Brenna.Trantow",
      type: "scalar",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Edison74",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Lizzie_Krajcik",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Jessika42",
      type: "scalar",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Cedrick0",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Marc_Rosenbaum35",
      type: "scalar",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Itzel.Howe19",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Lila76",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Lew_Grady43",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Mariela92",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Alexandro.Ratke",
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