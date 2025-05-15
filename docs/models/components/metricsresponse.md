# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2023-10-15T16:25:17.974Z"),
      orders: 1002.76,
      revenue: 8076.35,
      cumulativeRevenue: 711919,
      averageOrderValue: 963.89,
      oneTimeProducts: 690503,
      oneTimeProductsRevenue: 231.24,
      newSubscriptions: 5333.11,
      newSubscriptionsRevenue: 1430.84,
      renewedSubscriptions: 393486,
      renewedSubscriptionsRevenue: 732402,
      activeSubscriptions: 5510.54,
      monthlyRecurringRevenue: 275204,
      checkouts: 7126.24,
      succeededCheckouts: 649176,
      checkoutsConversion: 7565.12,
    },
  ],
  totals: {
    orders: 599395,
    revenue: 4330.56,
    cumulativeRevenue: 927370,
    averageOrderValue: 2009.09,
    oneTimeProducts: 4489.71,
    oneTimeProductsRevenue: 3552.82,
    newSubscriptions: 838606,
    newSubscriptionsRevenue: 187.61,
    renewedSubscriptions: 737797,
    renewedSubscriptionsRevenue: 2804.26,
    activeSubscriptions: 419988,
    monthlyRecurringRevenue: 659995,
    checkouts: 3799.2,
    succeededCheckouts: 36.68,
    checkoutsConversion: 1450.37,
  },
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Jamaal_Kuvalis",
      type: "percentage",
    },
    revenue: {
      slug: "<value>",
      displayName: "Eli_Kling8",
      type: "currency",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Raoul7",
      type: "percentage",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Fanny21",
      type: "percentage",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Addie_Glover75",
      type: "percentage",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Gust_Dooley55",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Connie_Satterfield37",
      type: "scalar",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Vanessa_Hegmann14",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Dan_Morissette1",
      type: "percentage",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Florence_Daniel12",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Ellsworth_Kshlerin53",
      type: "percentage",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Paul68",
      type: "currency",
    },
    checkouts: {
      slug: "<value>",
      displayName: "Candelario25",
      type: "scalar",
    },
    succeededCheckouts: {
      slug: "<value>",
      displayName: "Eloy37",
      type: "percentage",
    },
    checkoutsConversion: {
      slug: "<value>",
      displayName: "Yvonne26",
      type: "scalar",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `periods`                                                            | [components.MetricPeriod](../../models/components/metricperiod.md)[] | :heavy_check_mark:                                                   | List of data for each timestamp.                                     |
| `totals`                                                             | [components.MetricsTotals](../../models/components/metricstotals.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `metrics`                                                            | [components.Metrics](../../models/components/metrics.md)             | :heavy_check_mark:                                                   | N/A                                                                  |