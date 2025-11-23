# Metrics

## Example Usage

```typescript
import { Metrics } from "@polar-sh/sdk/models/components/metrics.js";

let value: Metrics = {
  orders: {
    slug: "<value>",
    displayName: "Cierra72",
    type: "scalar",
  },
  revenue: {
    slug: "<value>",
    displayName: "Mallie16",
    type: "currency",
  },
  netRevenue: {
    slug: "<value>",
    displayName: "Rigoberto_Schuster1",
    type: "scalar",
  },
  cumulativeRevenue: {
    slug: "<value>",
    displayName: "Stewart.Spencer21",
    type: "percentage",
  },
  netCumulativeRevenue: {
    slug: "<value>",
    displayName: "Jewel.West",
    type: "scalar",
  },
  costs: {
    slug: "<value>",
    displayName: "Burdette30",
    type: "currency",
  },
  cumulativeCosts: {
    slug: "<value>",
    displayName: "Jessika.Weber",
    type: "currency",
  },
  averageOrderValue: {
    slug: "<value>",
    displayName: "Larue5",
    type: "percentage",
  },
  netAverageOrderValue: {
    slug: "<value>",
    displayName: "Solon_Hickle",
    type: "scalar",
  },
  averageRevenuePerUser: {
    slug: "<value>",
    displayName: "Laila.Hand80",
    type: "currency",
  },
  costPerUser: {
    slug: "<value>",
    displayName: "Eleonore80",
    type: "percentage",
  },
  activeUserByEvent: {
    slug: "<value>",
    displayName: "Ayana.Renner81",
    type: "currency_sub_cent",
  },
  oneTimeProducts: {
    slug: "<value>",
    displayName: "Jessyca.Rogahn",
    type: "percentage",
  },
  oneTimeProductsRevenue: {
    slug: "<value>",
    displayName: "Alayna67",
    type: "currency",
  },
  oneTimeProductsNetRevenue: {
    slug: "<value>",
    displayName: "Eleonore_Erdman",
    type: "scalar",
  },
  newSubscriptions: {
    slug: "<value>",
    displayName: "Constance47",
    type: "currency",
  },
  newSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Jay45",
    type: "scalar",
  },
  newSubscriptionsNetRevenue: {
    slug: "<value>",
    displayName: "Christophe98",
    type: "currency_sub_cent",
  },
  renewedSubscriptions: {
    slug: "<value>",
    displayName: "Alysa.Nolan",
    type: "percentage",
  },
  renewedSubscriptionsRevenue: {
    slug: "<value>",
    displayName: "Vernon_Brekke69",
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
  churnedSubscriptions: {
    slug: "<value>",
    displayName: "Geo86",
    type: "scalar",
  },
  churnRate: {
    slug: "<value>",
    displayName: "Joey.Reinger",
    type: "scalar",
  },
  grossMargin: {
    slug: "<value>",
    displayName: "Sabryna6",
    type: "percentage",
  },
  grossMarginPercentage: {
    slug: "<value>",
    displayName: "Caterina17",
    type: "currency_sub_cent",
  },
  cashflow: {
    slug: "<value>",
    displayName: "Vern25",
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
| `churnedSubscriptions`                                 | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `churnRate`                                            | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `grossMargin`                                          | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `grossMarginPercentage`                                | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |
| `cashflow`                                             | [components.Metric](../../models/components/metric.md) | :heavy_check_mark:                                     | Information about a metric.                            |