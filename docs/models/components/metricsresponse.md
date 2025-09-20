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
    canceledSubscriptions: 187.61,
    canceledSubscriptionsCustomerService: 737797,
    canceledSubscriptionsLowQuality: 2804.26,
    canceledSubscriptionsMissingFeatures: 419988,
    canceledSubscriptionsSwitchedService: 659995,
    canceledSubscriptionsTooComplex: 3799.2,
    canceledSubscriptionsTooExpensive: 36.68,
    canceledSubscriptionsUnused: 1450.37,
    canceledSubscriptionsOther: 577796,
  },
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Jimmie_Renner86",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Jacinthe66",
      type: "percentage",
    },
    netRevenue: {
      slug: "<value>",
      displayName: "Matteo_Block",
      type: "scalar",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Nedra_Ebert92",
      type: "currency",
    },
    netCumulativeRevenue: {
      slug: "<value>",
      displayName: "Domingo.Rosenbaum",
      type: "percentage",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Coleman.Luettgen22",
      type: "percentage",
    },
    netAverageOrderValue: {
      slug: "<value>",
      displayName: "Orval28",
      type: "currency",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Ewell.Corkery55",
      type: "scalar",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Lew.Ankunding",
      type: "currency",
    },
    oneTimeProductsNetRevenue: {
      slug: "<value>",
      displayName: "Chaim.Christiansen38",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Jayden70",
      type: "percentage",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Jayde_Parisian39",
      type: "currency",
    },
    newSubscriptionsNetRevenue: {
      slug: "<value>",
      displayName: "Lenny_Funk1",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Lavina73",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Antwan_Glover",
      type: "currency",
    },
    renewedSubscriptionsNetRevenue: {
      slug: "<value>",
      displayName: "Alverta40",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Omari_Zieme",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Ellie_Stokes37",
      type: "scalar",
    },
    committedMonthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Trent.McClure",
      type: "currency",
    },
    checkouts: {
      slug: "<value>",
      displayName: "Rory.West89",
      type: "scalar",
    },
    succeededCheckouts: {
      slug: "<value>",
      displayName: "Shanie_Denesik",
      type: "scalar",
    },
    checkoutsConversion: {
      slug: "<value>",
      displayName: "Ashley65",
      type: "percentage",
    },
    canceledSubscriptions: {
      slug: "<value>",
      displayName: "Geraldine_Reilly",
      type: "percentage",
    },
    canceledSubscriptionsCustomerService: {
      slug: "<value>",
      displayName: "Hunter_Ortiz21",
      type: "currency",
    },
    canceledSubscriptionsLowQuality: {
      slug: "<value>",
      displayName: "Wyatt80",
      type: "scalar",
    },
    canceledSubscriptionsMissingFeatures: {
      slug: "<value>",
      displayName: "Camila22",
      type: "percentage",
    },
    canceledSubscriptionsSwitchedService: {
      slug: "<value>",
      displayName: "Vesta_Prohaska36",
      type: "percentage",
    },
    canceledSubscriptionsTooComplex: {
      slug: "<value>",
      displayName: "Leland.Parisian11",
      type: "currency",
    },
    canceledSubscriptionsTooExpensive: {
      slug: "<value>",
      displayName: "Syble32",
      type: "currency",
    },
    canceledSubscriptionsUnused: {
      slug: "<value>",
      displayName: "Nathanael.Gottlieb28",
      type: "scalar",
    },
    canceledSubscriptionsOther: {
      slug: "<value>",
      displayName: "Keyon_Sipes",
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