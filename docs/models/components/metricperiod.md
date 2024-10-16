# MetricPeriod

## Example Usage

```typescript
import { MetricPeriod } from "@polar-sh/sdk/models/components";

let value: MetricPeriod = {
  timestamp: new Date("2023-05-22T07:36:17.577Z"),
  orders: 574923,
  revenue: 138094,
  averageOrderValue: 306970,
  oneTimeProducts: 552212,
  oneTimeProductsRevenue: 401260,
  newSubscriptions: 715995,
  newSubscriptionsRevenue: 231322,
  renewedSubscriptions: 470724,
  renewedSubscriptionsRevenue: 821046,
  activeSubscriptions: 142769,
  monthlyRecurringRevenue: 894928,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of this period data.                                                                |
| `orders`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `revenue`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `averageOrderValue`                                                                           | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `oneTimeProducts`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `oneTimeProductsRevenue`                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `newSubscriptions`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `newSubscriptionsRevenue`                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `renewedSubscriptions`                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `renewedSubscriptionsRevenue`                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activeSubscriptions`                                                                         | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `monthlyRecurringRevenue`                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |