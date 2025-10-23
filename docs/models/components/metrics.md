# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components/metrics.js";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Sandrine.Hermann51",
    type: "scalar",
  },
  revenue: {
    slug: "<value>",
    displayName: "Makenna_Rutherford59",
    type: "percentage",
  },
  netRevenue: {
    slug: "<value>",
    displayName: "Timmothy_Dibbert76",
    type: "percentage",
  },
  cumulativeRevenue: {
    slug: "<value>",
    displayName: "Tiffany55",
    type: "scalar",
  },
  netCumulativeRevenue: {
    slug: "<value>",
    displayName: "Sedrick.Sipes",
    type: "scalar",
  },
  costs: {
    slug: "<value>",
    displayName: "Dakota_Turner",
    type: "scalar",
  },
  cumulativeCosts: {
    slug: "<value>",
    displayName: "Earlene_Kuvalis-Hegmann14",
    type: "currency",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Dan_Morissette1",
    type: "percentage",
  },
  netAverageOrderValue: {
    slug: "<value>",
    displayName: "Florence_Daniel12",
    type: "currency",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Ellsworth_Kshlerin53",
    type: "percentage",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Paul68",
    type: "currency",
  },
  oneTimeProductsNetRevenue: {
    slug: "<value>",
    displayName: "Candelario25",
    type: "scalar",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Eloy37",
    type: "percentage",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Yvonne26",
    type: "scalar",
  },
  newSubscriptionsNetRevenue: {
    slug: "<value>",
    displayName: "Kristy_Bayer",
    type: "currency",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Peter99",
    type: "percentage",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Jaiden.Gutmann",
    type: "currency",
  },
  renewedSubscriptionsNetRevenue: {
    slug: "<value>",
    displayName: "Abdullah_Weber",
    type: "percentage",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Jerrold_Spinka",
    type: "percentage",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Ben18",
    type: "percentage",
  },
  committedMonthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Lennie31",
    type: "currency",
  },
  checkouts: {
    slug: "<value>",
    displayName: "Sophie_Hoppe-Brekke69",
    type: "currency",
  },
  succeededCheckouts: {
    slug: "<value>",
    displayName: "Rhett_Harber88",
    type: "scalar",
  },
  checkoutsConversion: {
    slug: "<value>",
    displayName: "Lon80",
    type: "scalar",
  },
  canceledSubscriptions: {
    slug: "<value>",
    displayName: "Camila22",
    type: "percentage",
  },
  canceledSubscriptionsCustomerService: {
    slug: "<value>",
    displayName: "Vesta_Prohaska36",
    type: "percentage",
  },
  canceledSubscriptionsLowQuality: {
    slug: "<value>",
    displayName: "Leland.Parisian11",
    type: "currency",
  },
  canceledSubscriptionsMissingFeatures: {
    slug: "<value>",
    displayName: "Syble32",
    type: "currency",
  },
  canceledSubscriptionsSwitchedService: {
    slug: "<value>",
    displayName: "Nathanael.Gottlieb28",
    type: "scalar",
  },
  canceledSubscriptionsTooComplex: {
    slug: "<value>",
    displayName: "Keyon_Sipes",
    type: "currency",
  },
  canceledSubscriptionsTooExpensive: {
    slug: "<value>",
    displayName: "Moriah82",
    type: "percentage",
  },
  canceledSubscriptionsUnused: {
    slug: "<value>",
    displayName: "Ferne.Borer57",
    type: "percentage",
  },
  canceledSubscriptionsOther: {
    slug: "<value>",
    displayName: "Colten23",
    type: "currency",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `orders`                                               | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `revenue`                                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `netRevenue`                                           | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `cumulativeRevenue`                                    | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `netCumulativeRevenue`                                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `costs`                                                | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `cumulativeCosts`                                      | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `averageOrderValue`                                    | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `netAverageOrderValue`                                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `oneTimeProducts`                                      | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `oneTimeProductsRevenue`                               | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `oneTimeProductsNetRevenue`                            | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `newSubscriptions`                                     | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `newSubscriptionsRevenue`                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `newSubscriptionsNetRevenue`                           | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `renewedSubscriptions`                                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `renewedSubscriptionsRevenue`                          | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `renewedSubscriptionsNetRevenue`                       | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `activeSubscriptions`                                  | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `monthlyRecurringRevenue`                              | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `committedMonthlyRecurringRevenue`                     | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `checkouts`                                            | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `succeededCheckouts`                                   | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `checkoutsConversion`                                  | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptions`                                | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsCustomerService`                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsLowQuality`                      | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsMissingFeatures`                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsSwitchedService`                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsTooComplex`                      | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsTooExpensive`                    | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsUnused`                          | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `canceledSubscriptionsOther`                           | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |