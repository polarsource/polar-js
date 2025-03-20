# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2023-04-19T17:35:36.214Z"),
      orders: 60659,
      revenue: 616016,
      cumulativeRevenue: 796892,
      averageOrderValue: 996630,
      oneTimeProducts: 568218,
      oneTimeProductsRevenue: 229497,
      newSubscriptions: 405076,
      newSubscriptionsRevenue: 106639,
      renewedSubscriptions: 413871,
      renewedSubscriptionsRevenue: 840168,
      activeSubscriptions: 390200,
      monthlyRecurringRevenue: 51733,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Cassandre.Pollich81",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Eloisa_Hirthe",
      type: "currency",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Hoyt21",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Troy_Lindgren",
      type: "currency",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Corbin12",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Alden_Cremin",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Kasandra24",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Willy_Halvorson",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Brooklyn_Beer55",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Sophia_Balistreri-Hagenes5",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Nakia.Gutkowski",
      type: "currency",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Ole.Marquardt7",
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