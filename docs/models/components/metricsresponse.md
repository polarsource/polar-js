# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2023-04-01T15:25:04.349Z"),
      orders: 42665,
      revenue: 533171,
      averageOrderValue: 116704,
      oneTimeProducts: 79114,
      oneTimeProductsRevenue: 467579,
      newSubscriptions: 314769,
      newSubscriptionsRevenue: 881318,
      renewedSubscriptions: 315591,
      renewedSubscriptionsRevenue: 822577,
      activeSubscriptions: 4891,
      monthlyRecurringRevenue: 949209,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Amos_Bailey",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Emory37",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Kylee_Wunsch",
      type: "currency",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Jammie68",
      type: "scalar",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Josiane.Ledner",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Zena.Fay",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Giovani_Cummerata69",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Dylan37",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Lucile18",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Maryam53",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Garth.Durgan",
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