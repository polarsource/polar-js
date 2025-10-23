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
    oneTimeProducts: 732402,
    oneTimeProductsRevenue: 5510.54,
    oneTimeProductsNetRevenue: 275204,
    newSubscriptions: 7126.24,
    newSubscriptionsRevenue: 649176,
    newSubscriptionsNetRevenue: 7565.12,
    renewedSubscriptions: 599395,
    renewedSubscriptionsRevenue: 4330.56,
    renewedSubscriptionsNetRevenue: 927370,
    activeSubscriptions: 2009.09,
    monthlyRecurringRevenue: 4489.71,
    committedMonthlyRecurringRevenue: 3552.82,
    checkouts: 838606,
    succeededCheckouts: 187.61,
    checkoutsConversion: 737797,
    canceledSubscriptions: 2804.26,
    canceledSubscriptionsCustomerService: 419988,
    canceledSubscriptionsLowQuality: 659995,
    canceledSubscriptionsMissingFeatures: 3799.2,
    canceledSubscriptionsSwitchedService: 36.68,
    canceledSubscriptionsTooComplex: 1450.37,
    canceledSubscriptionsTooExpensive: 577796,
    canceledSubscriptionsUnused: 7217.84,
    canceledSubscriptionsOther: 5797.29,
  },
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Sandrine.Hermann51",
      type: "scalar",
    },
    revenue: {
      slug: "<value>",
      displayName: "Makenna_Rutherford59",
      type: "percentage",
    },
    netRevenue: {
      slug: "<value>",
      displayName: "Timmothy_Dibbert76",
      type: "percentage",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Tiffany55",
      type: "scalar",
    },
    netCumulativeRevenue: {
      slug: "<value>",
      displayName: "Sedrick.Sipes",
      type: "scalar",
    },
    costs: {
      slug: "<value>",
      displayName: "Dakota_Turner",
      type: "scalar",
    },
    cumulativeCosts: {
      slug: "<value>",
      displayName: "Earlene_Kuvalis-Hegmann14",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Dan_Morissette1",
      type: "percentage",
    },
    netAverageOrderValue: {
      slug: "<value>",
      displayName: "Florence_Daniel12",
      type: "currency",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Ellsworth_Kshlerin53",
      type: "percentage",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Paul68",
      type: "currency",
    },
    oneTimeProductsNetRevenue: {
      slug: "<value>",
      displayName: "Candelario25",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Eloy37",
      type: "percentage",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Yvonne26",
      type: "scalar",
    },
    newSubscriptionsNetRevenue: {
      slug: "<value>",
      displayName: "Kristy_Bayer",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Peter99",
      type: "percentage",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Jaiden.Gutmann",
      type: "currency",
    },
    renewedSubscriptionsNetRevenue: {
      slug: "<value>",
      displayName: "Abdullah_Weber",
      type: "percentage",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Jerrold_Spinka",
      type: "percentage",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Ben18",
      type: "percentage",
    },
    committedMonthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Lennie31",
      type: "currency",
    },
    checkouts: {
      slug: "<value>",
      displayName: "Sophie_Hoppe-Brekke69",
      type: "currency",
    },
    succeededCheckouts: {
      slug: "<value>",
      displayName: "Rhett_Harber88",
      type: "scalar",
    },
    checkoutsConversion: {
      slug: "<value>",
      displayName: "Lon80",
      type: "scalar",
    },
    canceledSubscriptions: {
      slug: "<value>",
      displayName: "Camila22",
      type: "percentage",
    },
    canceledSubscriptionsCustomerService: {
      slug: "<value>",
      displayName: "Vesta_Prohaska36",
      type: "percentage",
    },
    canceledSubscriptionsLowQuality: {
      slug: "<value>",
      displayName: "Leland.Parisian11",
      type: "currency",
    },
    canceledSubscriptionsMissingFeatures: {
      slug: "<value>",
      displayName: "Syble32",
      type: "currency",
    },
    canceledSubscriptionsSwitchedService: {
      slug: "<value>",
      displayName: "Nathanael.Gottlieb28",
      type: "scalar",
    },
    canceledSubscriptionsTooComplex: {
      slug: "<value>",
      displayName: "Keyon_Sipes",
      type: "currency",
    },
    canceledSubscriptionsTooExpensive: {
      slug: "<value>",
      displayName: "Moriah82",
      type: "percentage",
    },
    canceledSubscriptionsUnused: {
      slug: "<value>",
      displayName: "Ferne.Borer57",
      type: "percentage",
    },
    canceledSubscriptionsOther: {
      slug: "<value>",
      displayName: "Colten23",
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