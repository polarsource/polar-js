# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-09-25T16:34:12.626Z"),
      orders: 75685,
      revenue: 313717,
      cumulativeRevenue: 982685,
      averageOrderValue: 613334,
      oneTimeProducts: 419747,
      oneTimeProductsRevenue: 915692,
      newSubscriptions: 361284,
      newSubscriptionsRevenue: 747146,
      renewedSubscriptions: 146265,
      renewedSubscriptionsRevenue: 697160,
      activeSubscriptions: 491440,
      monthlyRecurringRevenue: 424629,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Darien13",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Ian_Berge",
      type: "scalar",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Magdalen51",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Ana.Haag7",
      type: "currency",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Fredy.Schimmel",
      type: "scalar",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Jalon_Grimes",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Verna_Nicolas64",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Laurel61",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Teagan56",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Reva.Heathcote",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Merl96",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Gladyce.Pollich",
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