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
    netRevenue: 711919,
    cumulativeRevenue: 963.89,
    netCumulativeRevenue: 690503,
    averageOrderValue: 231.24,
    netAverageOrderValue: 5333.11,
    oneTimeProducts: 1430.84,
    oneTimeProductsRevenue: 393486,
    oneTimeProductsNetRevenue: 732402,
    newSubscriptions: 5510.54,
    newSubscriptionsRevenue: 275204,
    newSubscriptionsNetRevenue: 7126.24,
    renewedSubscriptions: 649176,
    renewedSubscriptionsRevenue: 7565.12,
    renewedSubscriptionsNetRevenue: 599395,
    activeSubscriptions: 4330.56,
    monthlyRecurringRevenue: 927370,
    committedMonthlyRecurringRevenue: 2009.09,
    checkouts: 4489.71,
    succeededCheckouts: 3552.82,
    checkoutsConversion: 838606,
  },
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Keyshawn_Beer61",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Heidi37",
      type: "scalar",
    },
    netRevenue: {
      slug: "<value>",
      displayName: "Talon50",
      type: "percentage",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Kory.Gulgowski",
      type: "scalar",
    },
    netCumulativeRevenue: {
      slug: "<value>",
      displayName: "Dax_Schulist",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Oswaldo74",
      type: "scalar",
    },
    netAverageOrderValue: {
      slug: "<value>",
      displayName: "Monserrate_Adams",
      type: "percentage",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Casper20",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Adell77",
      type: "currency",
    },
    oneTimeProductsNetRevenue: {
      slug: "<value>",
      displayName: "Cyril34",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Clint61",
      type: "scalar",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Elouise.Herzog-Kuphal93",
      type: "scalar",
    },
    newSubscriptionsNetRevenue: {
      slug: "<value>",
      displayName: "Gerald.Medhurst",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Mekhi36",
      type: "percentage",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Grant_McKenzie32",
      type: "percentage",
    },
    renewedSubscriptionsNetRevenue: {
      slug: "<value>",
      displayName: "Ahmed_Gulgowski",
      type: "percentage",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Mya26",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Kristy_Bayer",
      type: "currency",
    },
    committedMonthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Peter99",
      type: "percentage",
    },
    checkouts: {
      slug: "<value>",
      displayName: "Jaiden.Gutmann",
      type: "currency",
    },
    succeededCheckouts: {
      slug: "<value>",
      displayName: "Abdullah_Weber",
      type: "percentage",
    },
    checkoutsConversion: {
      slug: "<value>",
      displayName: "Jerrold_Spinka",
      type: "percentage",
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