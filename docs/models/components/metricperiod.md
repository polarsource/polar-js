# MetricPeriod

## Example Usage

```typescript
import { MetricPeriod } from "@polar-sh/sdk/models/components/metricperiod.js";

let value: MetricPeriod = {
  timestamp: new Date("2024-12-07T13:36:27.254Z"),
  orders: 864630,
  revenue: 6773,
  cumulativeRevenue: 27735,
  averageOrderValue: 523165,
  oneTimeProducts: 466015,
  oneTimeProductsRevenue: 990568,
  newSubscriptions: 357536,
  newSubscriptionsRevenue: 389104,
  renewedSubscriptions: 835707,
  renewedSubscriptionsRevenue: 623092,
  activeSubscriptions: 71075,
  monthlyRecurringRevenue: 57659,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of this period data.                                                                |
| `orders`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `revenue`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cumulativeRevenue`                                                                           | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `averageOrderValue`                                                                           | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `oneTimeProducts`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `oneTimeProductsRevenue`                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `newSubscriptions`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `newSubscriptionsRevenue`                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `renewedSubscriptions`                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `renewedSubscriptionsRevenue`                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activeSubscriptions`                                                                         | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `monthlyRecurringRevenue`                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |