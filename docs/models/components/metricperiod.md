# MetricPeriod

## Example Usage

```typescript
import { MetricPeriod } from "@polar-sh/sdk/models/components/metricperiod.js";

let value: MetricPeriod = {
  timestamp: new Date("2023-02-27T06:20:14.306Z"),
  orders: 6683.69,
  revenue: 4081.41,
  netRevenue: 3846.82,
  cumulativeRevenue: 244464,
  netCumulativeRevenue: 287128,
  costs: 561829,
  cumulativeCosts: 2756.5,
  averageOrderValue: 996362,
  netAverageOrderValue: 180802,
  averageRevenuePerUser: 167605,
  costPerUser: 2292.45,
  activeUserByEvent: 627146,
  oneTimeProducts: 9269.73,
  oneTimeProductsRevenue: 949492,
  oneTimeProductsNetRevenue: 47251,
  newSubscriptions: 172713,
  newSubscriptionsRevenue: 5850.99,
  newSubscriptionsNetRevenue: 300280,
  renewedSubscriptions: 159933,
  renewedSubscriptionsRevenue: 66450,
  renewedSubscriptionsNetRevenue: 687843,
  activeSubscriptions: 397403,
  monthlyRecurringRevenue: 324523,
  committedMonthlyRecurringRevenue: 8399.94,
  checkouts: 5324.71,
  succeededCheckouts: 297943,
  checkoutsConversion: 3738.48,
  canceledSubscriptions: 249718,
  canceledSubscriptionsCustomerService: 826661,
  canceledSubscriptionsLowQuality: 2864.09,
  canceledSubscriptionsMissingFeatures: 238.25,
  canceledSubscriptionsSwitchedService: 6263.54,
  canceledSubscriptionsTooComplex: 279.99,
  canceledSubscriptionsTooExpensive: 7462.17,
  canceledSubscriptionsUnused: 9646.7,
  canceledSubscriptionsOther: 131528,
  grossMargin: 7914.5,
  grossMarginPercentage: 637942,
  cashflow: 48133,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of this period data.                                                                |
| `orders`                                                                                      | *components.Orders*                                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `revenue`                                                                                     | *components.Revenue*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `netRevenue`                                                                                  | *components.NetRevenue*                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cumulativeRevenue`                                                                           | *components.CumulativeRevenue*                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `netCumulativeRevenue`                                                                        | *components.NetCumulativeRevenue*                                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `costs`                                                                                       | *components.Costs*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cumulativeCosts`                                                                             | *components.CumulativeCosts*                                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `averageOrderValue`                                                                           | *components.AverageOrderValue*                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `netAverageOrderValue`                                                                        | *components.NetAverageOrderValue*                                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `averageRevenuePerUser`                                                                       | *components.AverageRevenuePerUser*                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `costPerUser`                                                                                 | *components.CostPerUser*                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activeUserByEvent`                                                                           | *components.ActiveUserByEvent*                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `oneTimeProducts`                                                                             | *components.OneTimeProducts*                                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `oneTimeProductsRevenue`                                                                      | *components.OneTimeProductsRevenue*                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `oneTimeProductsNetRevenue`                                                                   | *components.OneTimeProductsNetRevenue*                                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `newSubscriptions`                                                                            | *components.NewSubscriptions*                                                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `newSubscriptionsRevenue`                                                                     | *components.NewSubscriptionsRevenue*                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `newSubscriptionsNetRevenue`                                                                  | *components.NewSubscriptionsNetRevenue*                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `renewedSubscriptions`                                                                        | *components.RenewedSubscriptions*                                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `renewedSubscriptionsRevenue`                                                                 | *components.RenewedSubscriptionsRevenue*                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `renewedSubscriptionsNetRevenue`                                                              | *components.RenewedSubscriptionsNetRevenue*                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activeSubscriptions`                                                                         | *components.ActiveSubscriptions*                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `monthlyRecurringRevenue`                                                                     | *components.MonthlyRecurringRevenue*                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `committedMonthlyRecurringRevenue`                                                            | *components.CommittedMonthlyRecurringRevenue*                                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkouts`                                                                                   | *components.Checkouts*                                                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `succeededCheckouts`                                                                          | *components.SucceededCheckouts*                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkoutsConversion`                                                                         | *components.CheckoutsConversion*                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `canceledSubscriptions`                                                                       | *components.CanceledSubscriptions*                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `canceledSubscriptionsCustomerService`                                                        | *components.CanceledSubscriptionsCustomerService*                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `canceledSubscriptionsLowQuality`                                                             | *components.CanceledSubscriptionsLowQuality*                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `canceledSubscriptionsMissingFeatures`                                                        | *components.CanceledSubscriptionsMissingFeatures*                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `canceledSubscriptionsSwitchedService`                                                        | *components.CanceledSubscriptionsSwitchedService*                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `canceledSubscriptionsTooComplex`                                                             | *components.CanceledSubscriptionsTooComplex*                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `canceledSubscriptionsTooExpensive`                                                           | *components.CanceledSubscriptionsTooExpensive*                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `canceledSubscriptionsUnused`                                                                 | *components.CanceledSubscriptionsUnused*                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `canceledSubscriptionsOther`                                                                  | *components.CanceledSubscriptionsOther*                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `grossMargin`                                                                                 | *components.GrossMargin*                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `grossMarginPercentage`                                                                       | *components.GrossMarginPercentage*                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cashflow`                                                                                    | *components.Cashflow*                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |