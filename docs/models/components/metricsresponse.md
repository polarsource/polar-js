# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-11-19T01:54:46.683Z"),
      orders: 60068,
      revenue: 475314,
      cumulativeRevenue: 870008,
      averageOrderValue: 592279,
      oneTimeProducts: 375101,
      oneTimeProductsRevenue: 89246,
      newSubscriptions: 498586,
      newSubscriptionsRevenue: 918704,
      renewedSubscriptions: 73894,
      renewedSubscriptionsRevenue: 530871,
      activeSubscriptions: 426323,
      monthlyRecurringRevenue: 759464,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Camren_Rau51",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Xavier_Watsica",
      type: "scalar",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Alexandrine.Koelpin2",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Adolphus9",
      type: "currency",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Birdie.Mraz",
      type: "scalar",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Vernon.Wilkinson",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Marquise.Bartoletti71",
      type: "scalar",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Kavon.King21",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Loyal.Batz",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Savannah_Keebler23",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Loy28",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Twila0",
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