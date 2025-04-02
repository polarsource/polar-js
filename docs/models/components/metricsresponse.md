# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2023-06-18T22:29:40.191Z"),
      orders: 169320,
      revenue: 296491,
      cumulativeRevenue: 14614,
      averageOrderValue: 483645,
      oneTimeProducts: 969826,
      oneTimeProductsRevenue: 281531,
      newSubscriptions: 669828,
      newSubscriptionsRevenue: 844281,
      renewedSubscriptions: 939456,
      renewedSubscriptionsRevenue: 25326,
      activeSubscriptions: 845119,
      monthlyRecurringRevenue: 81399,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Elyssa.Hills",
      type: "scalar",
    },
    revenue: {
      slug: "<value>",
      displayName: "Harold.Von",
      type: "scalar",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Rita_Luettgen",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Antonio.Jacobson",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Kelsie75",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Regan.Volkman53",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Audra_Russel",
      type: "scalar",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Rosalinda_Herman",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Colleen.Klein6",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Princess.Denesik",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Isaias.Lubowitz6",
      type: "currency",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Arnaldo.Waelchi",
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