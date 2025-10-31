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
    churnRate: 662602,
    grossMargin: 7723.65,
    grossMarginPercentage: 5961.14,
    cashflow: 781715,
  },
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Timmothy_Dibbert76",
      type: "currency_sub_cent",
    },
    revenue: {
      slug: "<value>",
      displayName: "Tiffany55",
      type: "scalar",
    },
    netRevenue: {
      slug: "<value>",
      displayName: "Sedrick.Sipes",
      type: "scalar",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Dakota_Turner",
      type: "scalar",
    },
    netCumulativeRevenue: {
      slug: "<value>",
      displayName: "Earlene_Kuvalis-Hegmann14",
      type: "currency_sub_cent",
    },
    costs: {
      slug: "<value>",
      displayName: "Dan_Morissette1",
      type: "percentage",
    },
    cumulativeCosts: {
      slug: "<value>",
      displayName: "Florence_Daniel12",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Ellsworth_Kshlerin53",
      type: "currency_sub_cent",
    },
    netAverageOrderValue: {
      slug: "<value>",
      displayName: "Paul68",
      type: "currency",
    },
    averageRevenuePerUser: {
      slug: "<value>",
      displayName: "Candelario25",
      type: "scalar",
    },
    costPerUser: {
      slug: "<value>",
      displayName: "Eloy37",
      type: "currency_sub_cent",
    },
    activeUserByEvent: {
      slug: "<value>",
      displayName: "Yvonne26",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Kristy_Bayer",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Peter99",
      type: "percentage",
    },
    oneTimeProductsNetRevenue: {
      slug: "<value>",
      displayName: "Jaiden.Gutmann",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Abdullah_Weber",
      type: "currency_sub_cent",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Jerrold_Spinka",
      type: "percentage",
    },
    newSubscriptionsNetRevenue: {
      slug: "<value>",
      displayName: "Ben18",
      type: "percentage",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Lennie31",
      type: "currency_sub_cent",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Sophie_Hoppe-Brekke69",
      type: "currency",
    },
    renewedSubscriptionsNetRevenue: {
      slug: "<value>",
      displayName: "Rhett_Harber88",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Lon80",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Camila22",
      type: "percentage",
    },
    committedMonthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Vesta_Prohaska36",
      type: "percentage",
    },
    checkouts: {
      slug: "<value>",
      displayName: "Leland.Parisian11",
      type: "currency",
    },
    succeededCheckouts: {
      slug: "<value>",
      displayName: "Syble32",
      type: "currency_sub_cent",
    },
    checkoutsConversion: {
      slug: "<value>",
      displayName: "Nathanael.Gottlieb28",
      type: "currency",
    },
    canceledSubscriptions: {
      slug: "<value>",
      displayName: "Keyon_Sipes",
      type: "currency",
    },
    canceledSubscriptionsCustomerService: {
      slug: "<value>",
      displayName: "Moriah82",
      type: "currency_sub_cent",
    },
    canceledSubscriptionsLowQuality: {
      slug: "<value>",
      displayName: "Ferne.Borer57",
      type: "percentage",
    },
    canceledSubscriptionsMissingFeatures: {
      slug: "<value>",
      displayName: "Colten23",
      type: "currency_sub_cent",
    },
    canceledSubscriptionsSwitchedService: {
      slug: "<value>",
      displayName: "Jordi_Kirlin52",
      type: "currency_sub_cent",
    },
    canceledSubscriptionsTooComplex: {
      slug: "<value>",
      displayName: "Kaylin16",
      type: "currency_sub_cent",
    },
    canceledSubscriptionsTooExpensive: {
      slug: "<value>",
      displayName: "Alejandra_Bins11",
      type: "currency",
    },
    canceledSubscriptionsUnused: {
      slug: "<value>",
      displayName: "Korey.Bergstrom",
      type: "currency",
    },
    canceledSubscriptionsOther: {
      slug: "<value>",
      displayName: "Baron92",
      type: "percentage",
    },
    churnRate: {
      slug: "<value>",
      displayName: "Geo86",
      type: "scalar",
    },
    grossMargin: {
      slug: "<value>",
      displayName: "Joey.Reinger",
      type: "scalar",
    },
    grossMarginPercentage: {
      slug: "<value>",
      displayName: "Sabryna6",
      type: "percentage",
    },
    cashflow: {
      slug: "<value>",
      displayName: "Caterina17",
      type: "currency_sub_cent",
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