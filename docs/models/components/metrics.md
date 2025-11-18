# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components/metrics.js";

let value: Metrics = {
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
| `costs`                                                | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `cumulativeCosts`                                      | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `averageOrderValue`                                    | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `netAverageOrderValue`                                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `averageRevenuePerUser`                                | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `costPerUser`                                          | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `activeUserByEvent`                                    | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
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
| `grossMargin`                                          | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `grossMarginPercentage`                                | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `cashflow`                                             | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |