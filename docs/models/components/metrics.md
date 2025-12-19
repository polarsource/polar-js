# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components/metrics.js";

let value: Metrics = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `orders`                                               | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `revenue`                                              | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `netRevenue`                                           | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `cumulativeRevenue`                                    | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `netCumulativeRevenue`                                 | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `costs`                                                | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `cumulativeCosts`                                      | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `averageOrderValue`                                    | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `netAverageOrderValue`                                 | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `averageRevenuePerUser`                                | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `costPerUser`                                          | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `activeUserByEvent`                                    | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `oneTimeProducts`                                      | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `oneTimeProductsRevenue`                               | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `oneTimeProductsNetRevenue`                            | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `newSubscriptions`                                     | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `newSubscriptionsRevenue`                              | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `newSubscriptionsNetRevenue`                           | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `renewedSubscriptions`                                 | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `renewedSubscriptionsRevenue`                          | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `renewedSubscriptionsNetRevenue`                       | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `activeSubscriptions`                                  | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `committedSubscriptions`                               | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `monthlyRecurringRevenue`                              | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `committedMonthlyRecurringRevenue`                     | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `checkouts`                                            | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `succeededCheckouts`                                   | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `checkoutsConversion`                                  | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `canceledSubscriptions`                                | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `canceledSubscriptionsCustomerService`                 | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `canceledSubscriptionsLowQuality`                      | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `canceledSubscriptionsMissingFeatures`                 | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `canceledSubscriptionsSwitchedService`                 | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `canceledSubscriptionsTooComplex`                      | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `canceledSubscriptionsTooExpensive`                    | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `canceledSubscriptionsUnused`                          | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `canceledSubscriptionsOther`                           | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `churnedSubscriptions`                                 | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `churnRate`                                            | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `ltv`                                                  | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `grossMargin`                                          | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `grossMarginPercentage`                                | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `cashflow`                                             | [components.Metric](../../models/components/metric.md) | :heavy_minus_sign:                                     | N/A                                                    |