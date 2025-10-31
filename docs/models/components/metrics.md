# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components/metrics.js";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Timmothy_Dibbert76",
    type: "currency_sub_cent",
  },
  revenue: {
    slug: "<value>",
    displayName: "Tiffany55",
    type: "scalar",
  },
  netRevenue: {
    slug: "<value>",
    displayName: "Sedrick.Sipes",
    type: "scalar",
  },
  cumulativeRevenue: {
    slug: "<value>",
    displayName: "Dakota_Turner",
    type: "scalar",
  },
  netCumulativeRevenue: {
    slug: "<value>",
    displayName: "Earlene_Kuvalis-Hegmann14",
    type: "currency_sub_cent",
  },
  costs: {
    slug: "<value>",
    displayName: "Dan_Morissette1",
    type: "percentage",
  },
  cumulativeCosts: {
    slug: "<value>",
    displayName: "Florence_Daniel12",
    type: "currency",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Ellsworth_Kshlerin53",
    type: "currency_sub_cent",
  },
  netAverageOrderValue: {
    slug: "<value>",
    displayName: "Paul68",
    type: "currency",
  },
  averageRevenuePerUser: {
    slug: "<value>",
    displayName: "Candelario25",
    type: "scalar",
  },
  costPerUser: {
    slug: "<value>",
    displayName: "Eloy37",
    type: "currency_sub_cent",
  },
  activeUserByEvent: {
    slug: "<value>",
    displayName: "Yvonne26",
    type: "scalar",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Kristy_Bayer",
    type: "currency",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Peter99",
    type: "percentage",
  },
  oneTimeProductsNetRevenue: {
    slug: "<value>",
    displayName: "Jaiden.Gutmann",
    type: "currency",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Abdullah_Weber",
    type: "currency_sub_cent",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Jerrold_Spinka",
    type: "percentage",
  },
  newSubscriptionsNetRevenue: {
    slug: "<value>",
    displayName: "Ben18",
    type: "percentage",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Lennie31",
    type: "currency_sub_cent",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Sophie_Hoppe-Brekke69",
    type: "currency",
  },
  renewedSubscriptionsNetRevenue: {
    slug: "<value>",
    displayName: "Rhett_Harber88",
    type: "scalar",
  },
  activeSubscriptions: {
    slug: "<value>",
    displayName: "Lon80",
    type: "scalar",
  },
  monthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Camila22",
    type: "percentage",
  },
  committedMonthlyRecurringRevenue: {
    slug: "<value>",
    displayName: "Vesta_Prohaska36",
    type: "percentage",
  },
  checkouts: {
    slug: "<value>",
    displayName: "Leland.Parisian11",
    type: "currency",
  },
  succeededCheckouts: {
    slug: "<value>",
    displayName: "Syble32",
    type: "currency_sub_cent",
  },
  checkoutsConversion: {
    slug: "<value>",
    displayName: "Nathanael.Gottlieb28",
    type: "currency",
  },
  canceledSubscriptions: {
    slug: "<value>",
    displayName: "Keyon_Sipes",
    type: "currency",
  },
  canceledSubscriptionsCustomerService: {
    slug: "<value>",
    displayName: "Moriah82",
    type: "currency_sub_cent",
  },
  canceledSubscriptionsLowQuality: {
    slug: "<value>",
    displayName: "Ferne.Borer57",
    type: "percentage",
  },
  canceledSubscriptionsMissingFeatures: {
    slug: "<value>",
    displayName: "Colten23",
    type: "currency_sub_cent",
  },
  canceledSubscriptionsSwitchedService: {
    slug: "<value>",
    displayName: "Jordi_Kirlin52",
    type: "currency_sub_cent",
  },
  canceledSubscriptionsTooComplex: {
    slug: "<value>",
    displayName: "Kaylin16",
    type: "currency_sub_cent",
  },
  canceledSubscriptionsTooExpensive: {
    slug: "<value>",
    displayName: "Alejandra_Bins11",
    type: "currency",
  },
  canceledSubscriptionsUnused: {
    slug: "<value>",
    displayName: "Korey.Bergstrom",
    type: "currency",
  },
  canceledSubscriptionsOther: {
    slug: "<value>",
    displayName: "Baron92",
    type: "percentage",
  },
  churnRate: {
    slug: "<value>",
    displayName: "Geo86",
    type: "scalar",
  },
  grossMargin: {
    slug: "<value>",
    displayName: "Joey.Reinger",
    type: "scalar",
  },
  grossMarginPercentage: {
    slug: "<value>",
    displayName: "Sabryna6",
    type: "percentage",
  },
  cashflow: {
    slug: "<value>",
    displayName: "Caterina17",
    type: "currency_sub_cent",
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
| `averageRevenuePerUser`                                | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `costPerUser`                                          | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `activeUserByEvent`                                    | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
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
| `churnRate`                                            | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `grossMargin`                                          | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `grossMarginPercentage`                                | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `cashflow`                                             | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |