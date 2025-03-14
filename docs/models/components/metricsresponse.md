# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-11-30T17:03:39.942Z"),
      orders: 1920,
      revenue: 38529,
      cumulativeRevenue: 225522,
      averageOrderValue: 778856,
      oneTimeProducts: 399019,
      oneTimeProductsRevenue: 505363,
      newSubscriptions: 872509,
      newSubscriptionsRevenue: 891243,
      renewedSubscriptions: 427838,
      renewedSubscriptionsRevenue: 760160,
      activeSubscriptions: 234176,
      monthlyRecurringRevenue: 175186,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Westley_OKon2",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Jackeline.Klein90",
      type: "currency",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Addison_DuBuque39",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Emil26",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Aliya.Kuphal",
      type: "scalar",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Nels_Kuhn",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Jolie38",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Arnold39",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Zula.Daniel",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Arjun_Kuhn",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Karlie80",
      type: "currency",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Colten.Tromp49",
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