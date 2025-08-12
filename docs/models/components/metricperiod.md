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
  averageOrderValue: 561829,
  netAverageOrderValue: 2756.5,
  oneTimeProducts: 996362,
  oneTimeProductsRevenue: 180802,
  oneTimeProductsNetRevenue: 167605,
  newSubscriptions: 2292.45,
  newSubscriptionsRevenue: 627146,
  newSubscriptionsNetRevenue: 9269.73,
  renewedSubscriptions: 949492,
  renewedSubscriptionsRevenue: 47251,
  renewedSubscriptionsNetRevenue: 172713,
  activeSubscriptions: 5850.99,
  monthlyRecurringRevenue: 300280,
  committedMonthlyRecurringRevenue: 159933,
  checkouts: 66450,
  succeededCheckouts: 687843,
  checkoutsConversion: 397403,
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
| `averageOrderValue`                                                                           | *components.AverageOrderValue*                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `netAverageOrderValue`                                                                        | *components.NetAverageOrderValue*                                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
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