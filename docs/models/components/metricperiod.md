# MetricPeriod

## Example Usage

```typescript
import { MetricPeriod } from "@polar-sh/sdk/models/components/metricperiod.js";

let value: MetricPeriod = {
  timestamp: new Date("2023-02-27T06:20:14.306Z"),
  orders: 6683.69,
  revenue: 4081.41,
  cumulativeRevenue: 3846.82,
  averageOrderValue: 244464,
  oneTimeProducts: 287128,
  oneTimeProductsRevenue: 561829,
  newSubscriptions: 2756.5,
  newSubscriptionsRevenue: 996362,
  renewedSubscriptions: 180802,
  renewedSubscriptionsRevenue: 167605,
  activeSubscriptions: 2292.45,
  monthlyRecurringRevenue: 627146,
  committedMonthlyRecurringRevenue: 9269.73,
  checkouts: 949492,
  succeededCheckouts: 47251,
  checkoutsConversion: 172713,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of this period data.                                                                |
| `orders`                                                                                      | *components.Orders*                                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `revenue`                                                                                     | *components.Revenue*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cumulativeRevenue`                                                                           | *components.CumulativeRevenue*                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `averageOrderValue`                                                                           | *components.AverageOrderValue*                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `oneTimeProducts`                                                                             | *components.OneTimeProducts*                                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `oneTimeProductsRevenue`                                                                      | *components.OneTimeProductsRevenue*                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `newSubscriptions`                                                                            | *components.NewSubscriptions*                                                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `newSubscriptionsRevenue`                                                                     | *components.NewSubscriptionsRevenue*                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `renewedSubscriptions`                                                                        | *components.RenewedSubscriptions*                                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `renewedSubscriptionsRevenue`                                                                 | *components.RenewedSubscriptionsRevenue*                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activeSubscriptions`                                                                         | *components.ActiveSubscriptions*                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `monthlyRecurringRevenue`                                                                     | *components.MonthlyRecurringRevenue*                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `committedMonthlyRecurringRevenue`                                                            | *components.CommittedMonthlyRecurringRevenue*                                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkouts`                                                                                   | *components.Checkouts*                                                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `succeededCheckouts`                                                                          | *components.SucceededCheckouts*                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkoutsConversion`                                                                         | *components.CheckoutsConversion*                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |