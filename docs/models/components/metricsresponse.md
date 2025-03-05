# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2025-12-12T18:40:59.500Z"),
      orders: 411457,
      revenue: 615573,
      cumulativeRevenue: 761654,
      averageOrderValue: 927921,
      oneTimeProducts: 177016,
      oneTimeProductsRevenue: 911426,
      newSubscriptions: 626424,
      newSubscriptionsRevenue: 805607,
      renewedSubscriptions: 295555,
      renewedSubscriptionsRevenue: 500101,
      activeSubscriptions: 208959,
      monthlyRecurringRevenue: 854604,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Connor41",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Ellis_Ryan",
      type: "scalar",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Wilford.Bode",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Annabelle97",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Melyssa_Kulas58",
      type: "scalar",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Theodora22",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Jaylin_Barrows",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Joshuah.Roob15",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Leo.Roberts",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Billie.Lesch57",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Giovanni6",
      type: "currency",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Lesly_Rogahn",
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