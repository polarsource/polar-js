# MetricsTotals

## Example Usage

```typescript
import { MetricsTotals } from "@polar-sh/sdk/models/components/metricstotals.js";

let value: MetricsTotals = {
  orders: 1648.33,
  revenue: 204646,
  cumulativeRevenue: 7269.38,
  averageOrderValue: 320.58,
  oneTimeProducts: 711412,
  oneTimeProductsRevenue: 6780.69,
  newSubscriptions: 489082,
  newSubscriptionsRevenue: 9678.06,
  renewedSubscriptions: 8009.16,
  renewedSubscriptionsRevenue: 8492.83,
  activeSubscriptions: 830439,
  monthlyRecurringRevenue: 1946.31,
  checkouts: 892930,
  succeededCheckouts: 7077.98,
  checkoutsConversion: 694.09,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `orders`                                              | *components.MetricsTotalsOrders*                      | :heavy_check_mark:                                    | N/A                                                   |
| `revenue`                                             | *components.MetricsTotalsRevenue*                     | :heavy_check_mark:                                    | N/A                                                   |
| `cumulativeRevenue`                                   | *components.MetricsTotalsCumulativeRevenue*           | :heavy_check_mark:                                    | N/A                                                   |
| `averageOrderValue`                                   | *components.MetricsTotalsAverageOrderValue*           | :heavy_check_mark:                                    | N/A                                                   |
| `oneTimeProducts`                                     | *components.MetricsTotalsOneTimeProducts*             | :heavy_check_mark:                                    | N/A                                                   |
| `oneTimeProductsRevenue`                              | *components.MetricsTotalsOneTimeProductsRevenue*      | :heavy_check_mark:                                    | N/A                                                   |
| `newSubscriptions`                                    | *components.MetricsTotalsNewSubscriptions*            | :heavy_check_mark:                                    | N/A                                                   |
| `newSubscriptionsRevenue`                             | *components.MetricsTotalsNewSubscriptionsRevenue*     | :heavy_check_mark:                                    | N/A                                                   |
| `renewedSubscriptions`                                | *components.MetricsTotalsRenewedSubscriptions*        | :heavy_check_mark:                                    | N/A                                                   |
| `renewedSubscriptionsRevenue`                         | *components.MetricsTotalsRenewedSubscriptionsRevenue* | :heavy_check_mark:                                    | N/A                                                   |
| `activeSubscriptions`                                 | *components.MetricsTotalsActiveSubscriptions*         | :heavy_check_mark:                                    | N/A                                                   |
| `monthlyRecurringRevenue`                             | *components.MetricsTotalsMonthlyRecurringRevenue*     | :heavy_check_mark:                                    | N/A                                                   |
| `checkouts`                                           | *components.MetricsTotalsCheckouts*                   | :heavy_check_mark:                                    | N/A                                                   |
| `succeededCheckouts`                                  | *components.MetricsTotalsSucceededCheckouts*          | :heavy_check_mark:                                    | N/A                                                   |
| `checkoutsConversion`                                 | *components.MetricsTotalsCheckoutsConversion*         | :heavy_check_mark:                                    | N/A                                                   |