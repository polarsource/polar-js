# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [],
  totals: {
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
    committedMonthlyRecurringRevenue: 7126.24,
    checkouts: 649176,
    succeededCheckouts: 7565.12,
    checkoutsConversion: 599395,
  },
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Maudie_Davis82",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Isobel.Hermiston",
      type: "scalar",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Anderson.Morar",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Maggie0",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Jamaal_Kuvalis",
      type: "percentage",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Eli_Kling8",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Raoul7",
      type: "percentage",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Fanny21",
      type: "percentage",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Addie_Glover75",
      type: "percentage",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Gust_Dooley55",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Connie_Satterfield37",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Vanessa_Hegmann14",
      type: "currency",
    },
    committedMonthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Dan_Morissette1",
      type: "percentage",
    },
    checkouts: {
      slug: "<value>",
      displayName: "Florence_Daniel12",
      type: "currency",
    },
    succeededCheckouts: {
      slug: "<value>",
      displayName: "Ellsworth_Kshlerin53",
      type: "percentage",
    },
    checkoutsConversion: {
      slug: "<value>",
      displayName: "Paul68",
      type: "currency",
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