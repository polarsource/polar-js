# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-12-08T10:05:15.071Z"),
      orders: 394652,
      revenue: 812999,
      cumulativeRevenue: 780179,
      averageOrderValue: 999709,
      oneTimeProducts: 299170,
      oneTimeProductsRevenue: 175078,
      newSubscriptions: 185318,
      newSubscriptionsRevenue: 598919,
      renewedSubscriptions: 334544,
      renewedSubscriptionsRevenue: 906855,
      activeSubscriptions: 79356,
      monthlyRecurringRevenue: 764817,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Jenifer_McKenzie",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Katlynn_Schoen89",
      type: "scalar",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Stefan.Kuhn",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Henry.Olson34",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Garrett61",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Josephine84",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Leila.OConner36",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Abagail.Jakubowski36",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Marjory.Anderson",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Bartholome_OConner86",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Judah38",
      type: "currency",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Antonetta.Lehner",
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