# MetricsTotals

## Example Usage

```typescript
import { MetricsTotals } from "@polar-sh/sdk/models/components/metricstotals.js";

let value: MetricsTotals = {
  orders: 1648.33,
  revenue: 204646,
  netRevenue: 7269.38,
  cumulativeRevenue: 320.58,
  netCumulativeRevenue: 711412,
  costs: 6780.69,
  cumulativeCosts: 489082,
  averageOrderValue: 9678.06,
  netAverageOrderValue: 8009.16,
  averageRevenuePerUser: 8492.83,
  costPerUser: 830439,
  activeUserByEvent: 1946.31,
  oneTimeProducts: 892930,
  oneTimeProductsRevenue: 7077.98,
  oneTimeProductsNetRevenue: 694.09,
  newSubscriptions: 146536,
  newSubscriptionsRevenue: 6421.7,
  newSubscriptionsNetRevenue: 4667.88,
  renewedSubscriptions: 8052.18,
  renewedSubscriptionsRevenue: 6575.27,
  renewedSubscriptionsNetRevenue: 7545.29,
  activeSubscriptions: 79480,
  monthlyRecurringRevenue: 2246.25,
  committedMonthlyRecurringRevenue: 623748,
  checkouts: 6809.21,
  succeededCheckouts: 6520.22,
  checkoutsConversion: 936901,
  canceledSubscriptions: 1370.43,
  canceledSubscriptionsCustomerService: 4441.58,
  canceledSubscriptionsLowQuality: 8832.53,
  canceledSubscriptionsMissingFeatures: 9028.1,
  canceledSubscriptionsSwitchedService: 927372,
  canceledSubscriptionsTooComplex: 54958,
  canceledSubscriptionsTooExpensive: 51193,
  canceledSubscriptionsUnused: 8139.5,
  canceledSubscriptionsOther: 2639.76,
  grossMargin: 453158,
  grossMarginPercentage: 8676.75,
  cashflow: 1596,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `orders`                                                       | *components.MetricsTotalsOrders*                               | :heavy_check_mark:                                             | N/A                                                            |
| `revenue`                                                      | *components.MetricsTotalsRevenue*                              | :heavy_check_mark:                                             | N/A                                                            |
| `netRevenue`                                                   | *components.MetricsTotalsNetRevenue*                           | :heavy_check_mark:                                             | N/A                                                            |
| `cumulativeRevenue`                                            | *components.MetricsTotalsCumulativeRevenue*                    | :heavy_check_mark:                                             | N/A                                                            |
| `netCumulativeRevenue`                                         | *components.MetricsTotalsNetCumulativeRevenue*                 | :heavy_check_mark:                                             | N/A                                                            |
| `costs`                                                        | *components.MetricsTotalsCosts*                                | :heavy_check_mark:                                             | N/A                                                            |
| `cumulativeCosts`                                              | *components.MetricsTotalsCumulativeCosts*                      | :heavy_check_mark:                                             | N/A                                                            |
| `averageOrderValue`                                            | *components.MetricsTotalsAverageOrderValue*                    | :heavy_check_mark:                                             | N/A                                                            |
| `netAverageOrderValue`                                         | *components.MetricsTotalsNetAverageOrderValue*                 | :heavy_check_mark:                                             | N/A                                                            |
| `averageRevenuePerUser`                                        | *components.MetricsTotalsAverageRevenuePerUser*                | :heavy_check_mark:                                             | N/A                                                            |
| `costPerUser`                                                  | *components.MetricsTotalsCostPerUser*                          | :heavy_check_mark:                                             | N/A                                                            |
| `activeUserByEvent`                                            | *components.MetricsTotalsActiveUserByEvent*                    | :heavy_check_mark:                                             | N/A                                                            |
| `oneTimeProducts`                                              | *components.MetricsTotalsOneTimeProducts*                      | :heavy_check_mark:                                             | N/A                                                            |
| `oneTimeProductsRevenue`                                       | *components.MetricsTotalsOneTimeProductsRevenue*               | :heavy_check_mark:                                             | N/A                                                            |
| `oneTimeProductsNetRevenue`                                    | *components.MetricsTotalsOneTimeProductsNetRevenue*            | :heavy_check_mark:                                             | N/A                                                            |
| `newSubscriptions`                                             | *components.MetricsTotalsNewSubscriptions*                     | :heavy_check_mark:                                             | N/A                                                            |
| `newSubscriptionsRevenue`                                      | *components.MetricsTotalsNewSubscriptionsRevenue*              | :heavy_check_mark:                                             | N/A                                                            |
| `newSubscriptionsNetRevenue`                                   | *components.MetricsTotalsNewSubscriptionsNetRevenue*           | :heavy_check_mark:                                             | N/A                                                            |
| `renewedSubscriptions`                                         | *components.MetricsTotalsRenewedSubscriptions*                 | :heavy_check_mark:                                             | N/A                                                            |
| `renewedSubscriptionsRevenue`                                  | *components.MetricsTotalsRenewedSubscriptionsRevenue*          | :heavy_check_mark:                                             | N/A                                                            |
| `renewedSubscriptionsNetRevenue`                               | *components.MetricsTotalsRenewedSubscriptionsNetRevenue*       | :heavy_check_mark:                                             | N/A                                                            |
| `activeSubscriptions`                                          | *components.MetricsTotalsActiveSubscriptions*                  | :heavy_check_mark:                                             | N/A                                                            |
| `monthlyRecurringRevenue`                                      | *components.MetricsTotalsMonthlyRecurringRevenue*              | :heavy_check_mark:                                             | N/A                                                            |
| `committedMonthlyRecurringRevenue`                             | *components.MetricsTotalsCommittedMonthlyRecurringRevenue*     | :heavy_check_mark:                                             | N/A                                                            |
| `checkouts`                                                    | *components.MetricsTotalsCheckouts*                            | :heavy_check_mark:                                             | N/A                                                            |
| `succeededCheckouts`                                           | *components.MetricsTotalsSucceededCheckouts*                   | :heavy_check_mark:                                             | N/A                                                            |
| `checkoutsConversion`                                          | *components.MetricsTotalsCheckoutsConversion*                  | :heavy_check_mark:                                             | N/A                                                            |
| `canceledSubscriptions`                                        | *components.MetricsTotalsCanceledSubscriptions*                | :heavy_check_mark:                                             | N/A                                                            |
| `canceledSubscriptionsCustomerService`                         | *components.MetricsTotalsCanceledSubscriptionsCustomerService* | :heavy_check_mark:                                             | N/A                                                            |
| `canceledSubscriptionsLowQuality`                              | *components.MetricsTotalsCanceledSubscriptionsLowQuality*      | :heavy_check_mark:                                             | N/A                                                            |
| `canceledSubscriptionsMissingFeatures`                         | *components.MetricsTotalsCanceledSubscriptionsMissingFeatures* | :heavy_check_mark:                                             | N/A                                                            |
| `canceledSubscriptionsSwitchedService`                         | *components.MetricsTotalsCanceledSubscriptionsSwitchedService* | :heavy_check_mark:                                             | N/A                                                            |
| `canceledSubscriptionsTooComplex`                              | *components.MetricsTotalsCanceledSubscriptionsTooComplex*      | :heavy_check_mark:                                             | N/A                                                            |
| `canceledSubscriptionsTooExpensive`                            | *components.MetricsTotalsCanceledSubscriptionsTooExpensive*    | :heavy_check_mark:                                             | N/A                                                            |
| `canceledSubscriptionsUnused`                                  | *components.MetricsTotalsCanceledSubscriptionsUnused*          | :heavy_check_mark:                                             | N/A                                                            |
| `canceledSubscriptionsOther`                                   | *components.MetricsTotalsCanceledSubscriptionsOther*           | :heavy_check_mark:                                             | N/A                                                            |
| `grossMargin`                                                  | *components.MetricsTotalsGrossMargin*                          | :heavy_check_mark:                                             | N/A                                                            |
| `grossMarginPercentage`                                        | *components.MetricsTotalsGrossMarginPercentage*                | :heavy_check_mark:                                             | N/A                                                            |
| `cashflow`                                                     | *components.MetricsTotalsCashflow*                             | :heavy_check_mark:                                             | N/A                                                            |