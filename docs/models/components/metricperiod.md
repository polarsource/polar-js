# MetricPeriod

## Example Usage

```typescript
import { MetricPeriod } from "@polar-sh/sdk/models/components";

let value: MetricPeriod = {
  timestamp: new Date("2024-03-02T12:19:42.362Z"),
  orders: 877399,
  revenue: 32901,
  averageOrderValue: 371919,
  oneTimeProducts: 425946,
  oneTimeProductsRevenue: 1383,
  newSubscriptions: 93894,
  newSubscriptionsRevenue: 247685,
  renewedSubscriptions: 978548,
  renewedSubscriptionsRevenue: 318233,
  activeSubscriptions: 575213,
  monthlyRecurringRevenue: 858778,
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