# MetricsOutput

## Example Usage

```typescript
import { MetricsOutput } from "@polar-sh/sdk/models/components/metricsoutput.js";

let value: MetricsOutput = {
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
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `orders`                                               | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `revenue`                                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `netRevenue`                                           | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `cumulativeRevenue`                                    | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `netCumulativeRevenue`                                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `averageOrderValue`                                    | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `netAverageOrderValue`                                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `oneTimeProducts`                                      | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `oneTimeProductsRevenue`                               | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `oneTimeProductsNetRevenue`                            | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `newSubscriptions`                                     | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `newSubscriptionsRevenue`                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `newSubscriptionsNetRevenue`                           | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `renewedSubscriptions`                                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `renewedSubscriptionsRevenue`                          | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `renewedSubscriptionsNetRevenue`                       | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `activeSubscriptions`                                  | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `monthlyRecurringRevenue`                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `committedMonthlyRecurringRevenue`                     | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `checkouts`                                            | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `succeededCheckouts`                                   | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `checkoutsConversion`                                  | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptions`                                | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsCustomerService`                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsLowQuality`                      | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsMissingFeatures`                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsSwitchedService`                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsTooComplex`                      | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsTooExpensive`                    | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsUnused`                          | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsOther`                           | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |