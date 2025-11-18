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
    costs: 231.24,
    cumulativeCosts: 5333.11,
    averageOrderValue: 1430.84,
    netAverageOrderValue: 393486,
    averageRevenuePerUser: 732402,
    costPerUser: 5510.54,
    activeUserByEvent: 275204,
    oneTimeProducts: 7126.24,
    oneTimeProductsRevenue: 649176,
    oneTimeProductsNetRevenue: 7565.12,
    newSubscriptions: 599395,
    newSubscriptionsRevenue: 4330.56,
    newSubscriptionsNetRevenue: 927370,
    renewedSubscriptions: 2009.09,
    renewedSubscriptionsRevenue: 4489.71,
    renewedSubscriptionsNetRevenue: 3552.82,
    activeSubscriptions: 838606,
    monthlyRecurringRevenue: 187.61,
    committedMonthlyRecurringRevenue: 737797,
    checkouts: 2804.26,
    succeededCheckouts: 419988,
    checkoutsConversion: 659995,
    canceledSubscriptions: 3799.2,
    canceledSubscriptionsCustomerService: 36.68,
    canceledSubscriptionsLowQuality: 1450.37,
    canceledSubscriptionsMissingFeatures: 577796,
    canceledSubscriptionsSwitchedService: 7217.84,
    canceledSubscriptionsTooComplex: 5797.29,
    canceledSubscriptionsTooExpensive: 2977.65,
    canceledSubscriptionsUnused: 453830,
    canceledSubscriptionsOther: 875.39,
    grossMargin: 662602,
    grossMarginPercentage: 7723.65,
    cashflow: 5961.14,
  },
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Arjun18",
      type: "percentage",
    },
    revenue: {
      slug: "<value>",
      displayName: "Cornell.Walter66",
      type: "currency_sub_cent",
    },
    netRevenue: {
      slug: "<value>",
      displayName: "Niko.Terry83",
      type: "percentage",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Kayla90",
      type: "percentage",
    },
    netCumulativeRevenue: {
      slug: "<value>",
      displayName: "Garland_Grady",
      type: "percentage",
    },
    costs: {
      slug: "<value>",
      displayName: "Caesar.Lynch",
      type: "percentage",
    },
    cumulativeCosts: {
      slug: "<value>",
      displayName: "Adolphus.Zboncak49",
      type: "percentage",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Breana.Hoppe",
      type: "percentage",
    },
    netAverageOrderValue: {
      slug: "<value>",
      displayName: "Kaitlyn_Quigley",
      type: "currency",
    },
    averageRevenuePerUser: {
      slug: "<value>",
      displayName: "Marilou.Jacobi",
      type: "currency",
    },
    costPerUser: {
      slug: "<value>",
      displayName: "Deondre.Auer",
      type: "currency_sub_cent",
    },
    activeUserByEvent: {
      slug: "<value>",
      displayName: "General_Rice9",
      type: "currency_sub_cent",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Dominic_Bechtelar49",
      type: "currency_sub_cent",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Ayana2",
      type: "currency_sub_cent",
    },
    oneTimeProductsNetRevenue: {
      slug: "<value>",
      displayName: "Zelma.Runte29",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Rylee20",
      type: "percentage",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Kris47",
      type: "currency_sub_cent",
    },
    newSubscriptionsNetRevenue: {
      slug: "<value>",
      displayName: "Ubaldo18",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Christopher.Spencer-Mohr",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Trevor_Treutel38",
      type: "currency_sub_cent",
    },
    renewedSubscriptionsNetRevenue: {
      slug: "<value>",
      displayName: "Maxime_Koepp43",
      type: "currency_sub_cent",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Shirley_Cole",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Michael.Ratke",
      type: "scalar",
    },
    committedMonthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Pearline_Stark95",
      type: "currency_sub_cent",
    },
    checkouts: {
      slug: "<value>",
      displayName: "Richmond_Feeney60",
      type: "currency_sub_cent",
    },
    succeededCheckouts: {
      slug: "<value>",
      displayName: "Damion90",
      type: "scalar",
    },
    checkoutsConversion: {
      slug: "<value>",
      displayName: "Cortez_Parisian74",
      type: "currency",
    },
    canceledSubscriptions: {
      slug: "<value>",
      displayName: "Harley.Glover",
      type: "percentage",
    },
    canceledSubscriptionsCustomerService: {
      slug: "<value>",
      displayName: "Lemuel.Kozey",
      type: "scalar",
    },
    canceledSubscriptionsLowQuality: {
      slug: "<value>",
      displayName: "Rico_Stark35",
      type: "scalar",
    },
    canceledSubscriptionsMissingFeatures: {
      slug: "<value>",
      displayName: "Arvel_Brown20",
      type: "scalar",
    },
    canceledSubscriptionsSwitchedService: {
      slug: "<value>",
      displayName: "Ruben_Reinger51",
      type: "currency",
    },
    canceledSubscriptionsTooComplex: {
      slug: "<value>",
      displayName: "Verna55",
      type: "percentage",
    },
    canceledSubscriptionsTooExpensive: {
      slug: "<value>",
      displayName: "Marcelina_Ward2",
      type: "scalar",
    },
    canceledSubscriptionsUnused: {
      slug: "<value>",
      displayName: "Tristian.Boehm",
      type: "scalar",
    },
    canceledSubscriptionsOther: {
      slug: "<value>",
      displayName: "Jermey10",
      type: "percentage",
    },
    grossMargin: {
      slug: "<value>",
      displayName: "Howard_Reilly38",
      type: "currency",
    },
    grossMarginPercentage: {
      slug: "<value>",
      displayName: "Karina.Wuckert50",
      type: "currency_sub_cent",
    },
    cashflow: {
      slug: "<value>",
      displayName: "Emilie86",
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