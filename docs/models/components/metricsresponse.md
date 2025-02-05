# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-08-16T20:36:27.976Z"),
      orders: 637070,
      revenue: 92130,
      cumulativeRevenue: 139432,
      averageOrderValue: 32442,
      oneTimeProducts: 162408,
      oneTimeProductsRevenue: 222577,
      newSubscriptions: 690703,
      newSubscriptionsRevenue: 65214,
      renewedSubscriptions: 687407,
      renewedSubscriptionsRevenue: 405428,
      activeSubscriptions: 142953,
      monthlyRecurringRevenue: 982330,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Joannie.Bednar61",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Dudley.Jerde",
      type: "scalar",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Valentin66",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Richard.White",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Adonis3",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Scot_Konopelski20",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Zoe.Prohaska3",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Nathan.Ebert77",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Celia92",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Victor26",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Dudley.Schulist57",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Lera93",
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