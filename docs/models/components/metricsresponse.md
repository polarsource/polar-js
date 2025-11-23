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
    churnedSubscriptions: 662602,
    churnRate: 7723.65,
    grossMargin: 5961.14,
    grossMarginPercentage: 781715,
    cashflow: 3479.35,
  },
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Cierra72",
      type: "scalar",
    },
    revenue: {
      slug: "<value>",
      displayName: "Mallie16",
      type: "currency",
    },
    netRevenue: {
      slug: "<value>",
      displayName: "Rigoberto_Schuster1",
      type: "scalar",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Stewart.Spencer21",
      type: "percentage",
    },
    netCumulativeRevenue: {
      slug: "<value>",
      displayName: "Jewel.West",
      type: "scalar",
    },
    costs: {
      slug: "<value>",
      displayName: "Burdette30",
      type: "currency",
    },
    cumulativeCosts: {
      slug: "<value>",
      displayName: "Jessika.Weber",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Larue5",
      type: "percentage",
    },
    netAverageOrderValue: {
      slug: "<value>",
      displayName: "Solon_Hickle",
      type: "scalar",
    },
    averageRevenuePerUser: {
      slug: "<value>",
      displayName: "Laila.Hand80",
      type: "currency",
    },
    costPerUser: {
      slug: "<value>",
      displayName: "Eleonore80",
      type: "percentage",
    },
    activeUserByEvent: {
      slug: "<value>",
      displayName: "Ayana.Renner81",
      type: "currency_sub_cent",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Jessyca.Rogahn",
      type: "percentage",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Alayna67",
      type: "currency",
    },
    oneTimeProductsNetRevenue: {
      slug: "<value>",
      displayName: "Eleonore_Erdman",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Constance47",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Jay45",
      type: "scalar",
    },
    newSubscriptionsNetRevenue: {
      slug: "<value>",
      displayName: "Christophe98",
      type: "currency_sub_cent",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Alysa.Nolan",
      type: "percentage",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Vernon_Brekke69",
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
    churnedSubscriptions: {
      slug: "<value>",
      displayName: "Geo86",
      type: "scalar",
    },
    churnRate: {
      slug: "<value>",
      displayName: "Joey.Reinger",
      type: "scalar",
    },
    grossMargin: {
      slug: "<value>",
      displayName: "Sabryna6",
      type: "percentage",
    },
    grossMarginPercentage: {
      slug: "<value>",
      displayName: "Caterina17",
      type: "currency_sub_cent",
    },
    cashflow: {
      slug: "<value>",
      displayName: "Vern25",
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