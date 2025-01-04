# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-11-18T07:34:59.752Z"),
      orders: 829393,
      revenue: 684229,
      averageOrderValue: 947182,
      oneTimeProducts: 407209,
      oneTimeProductsRevenue: 772726,
      newSubscriptions: 509186,
      newSubscriptionsRevenue: 49491,
      renewedSubscriptions: 13262,
      renewedSubscriptionsRevenue: 425123,
      activeSubscriptions: 659975,
      monthlyRecurringRevenue: 863273,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Alexane_Torp",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Consuelo19",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Alexie_Ward54",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Oliver.Emard",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Tiana_Parisian22",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Diego_Fadel-Gottlieb81",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Carmel.Moore",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Thelma92",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Wade66",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Joana_Kub24",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Alvina_Spinka",
      type: "scalar",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `periods`                                                            | [components.MetricPeriod](../../models/components/metricperiod.md)[] | :heavy_check_mark:                                                   | List of data for each timestamp.                                     |
| `metrics`                                                            | [components.Metrics](../../models/components/metrics.md)             | :heavy_check_mark:                                                   | N/A                                                                  |