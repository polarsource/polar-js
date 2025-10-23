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
  oneTimeProducts: 8492.83,
  oneTimeProductsRevenue: 830439,
  oneTimeProductsNetRevenue: 1946.31,
  newSubscriptions: 892930,
  newSubscriptionsRevenue: 7077.98,
  newSubscriptionsNetRevenue: 694.09,
  renewedSubscriptions: 146536,
  renewedSubscriptionsRevenue: 6421.7,
  renewedSubscriptionsNetRevenue: 4667.88,
  activeSubscriptions: 8052.18,
  monthlyRecurringRevenue: 6575.27,
  committedMonthlyRecurringRevenue: 7545.29,
  checkouts: 79480,
  succeededCheckouts: 2246.25,
  checkoutsConversion: 623748,
  canceledSubscriptions: 6809.21,
  canceledSubscriptionsCustomerService: 6520.22,
  canceledSubscriptionsLowQuality: 936901,
  canceledSubscriptionsMissingFeatures: 1370.43,
  canceledSubscriptionsSwitchedService: 4441.58,
  canceledSubscriptionsTooComplex: 8832.53,
  canceledSubscriptionsTooExpensive: 9028.1,
  canceledSubscriptionsUnused: 927372,
  canceledSubscriptionsOther: 54958,
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