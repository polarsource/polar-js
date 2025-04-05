# MetricPeriod

## Example Usage

```typescript
import { MetricPeriod } from "@polar-sh/sdk/models/components/metricperiod.js";

let value: MetricPeriod = {
  timestamp: new Date("2023-02-27T06:20:14.306Z"),
  orders: 872443,
  revenue: 668369,
  cumulativeRevenue: 871344,
  averageOrderValue: 408141,
  oneTimeProducts: 919392,
  oneTimeProductsRevenue: 384682,
  newSubscriptions: 180009,
  newSubscriptionsRevenue: 244464,
  renewedSubscriptions: 281705,
  renewedSubscriptionsRevenue: 287128,
  activeSubscriptions: 102273,
  monthlyRecurringRevenue: 561829,
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