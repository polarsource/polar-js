# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2025-01-19T20:11:42.821Z"),
      orders: 351263,
      revenue: 79659,
      cumulativeRevenue: 32170,
      averageOrderValue: 450561,
      oneTimeProducts: 459536,
      oneTimeProductsRevenue: 386185,
      newSubscriptions: 29923,
      newSubscriptionsRevenue: 199345,
      renewedSubscriptions: 136514,
      renewedSubscriptionsRevenue: 12738,
      activeSubscriptions: 619134,
      monthlyRecurringRevenue: 98946,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Caleigh_Runolfsdottir",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Earlene95",
      type: "currency",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Camille_Johnston68",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Brain55",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Abner_Beahan63",
      type: "scalar",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Dangelo87",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Noelia_Daniel",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Alejandrin.Reichel",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Sydnee.Rosenbaum46",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Graciela.Sanford",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Diana.Kohler",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Fabian_Jacobs",
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