# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-08-23T22:10:48.974Z"),
      orders: 315591,
      revenue: 822577,
      averageOrderValue: 4891,
      oneTimeProducts: 949209,
      oneTimeProductsRevenue: 54329,
      newSubscriptions: 262883,
      newSubscriptionsRevenue: 24886,
      renewedSubscriptions: 959355,
      renewedSubscriptionsRevenue: 51685,
      activeSubscriptions: 349003,
      monthlyRecurringRevenue: 663840,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Emory37",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Kylee_Wunsch",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Jammie68",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Josiane.Ledner",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Zena.Fay",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Giovani_Cummerata69",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Dylan37",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Lucile18",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Maryam53",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Garth.Durgan",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Rubye_Balistreri",
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