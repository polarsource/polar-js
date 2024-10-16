# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-01-17T21:04:26.038Z"),
      orders: 240101,
      revenue: 349551,
      averageOrderValue: 71631,
      oneTimeProducts: 816230,
      oneTimeProductsRevenue: 70999,
      newSubscriptions: 298797,
      newSubscriptionsRevenue: 925633,
      renewedSubscriptions: 559410,
      renewedSubscriptionsRevenue: 217880,
      activeSubscriptions: 992888,
      monthlyRecurringRevenue: 880730,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Anne.Nitzsche53",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Justus.Collier-Lemke61",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Hyman49",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Dena13",
      type: "scalar",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Ally.Fahey",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Danny.Swift99",
      type: "scalar",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Kenya_Krajcik41",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Tatum.Crooks",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Ada_Marvin10",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Kaelyn_Schumm",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Donnell88",
      type: "currency",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `periods`                                                            | [components.MetricPeriod](../../models/components/metricperiod.md)[] | :heavy_check_mark:                                                   | List of data for each timestamp.                                     |
| `metrics`                                                            | [components.Metrics](../../models/components/metrics.md)             | :heavy_check_mark:                                                   | N/A                                                                  |