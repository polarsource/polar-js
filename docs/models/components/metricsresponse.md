# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-05-09T16:47:22.985Z"),
      orders: 528933,
      revenue: 304797,
      averageOrderValue: 445413,
      oneTimeProducts: 774266,
      oneTimeProductsRevenue: 668154,
      newSubscriptions: 110903,
      newSubscriptionsRevenue: 531247,
      renewedSubscriptions: 198695,
      renewedSubscriptionsRevenue: 978408,
      activeSubscriptions: 738626,
      monthlyRecurringRevenue: 81000,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Della_Hilpert6",
      type: "scalar",
    },
    revenue: {
      slug: "<value>",
      displayName: "Lindsey_Senger-Douglas",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Ladarius_Cummerata8",
      type: "currency",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Dana.Johns12",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "April29",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Camren22",
      type: "scalar",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Jany.Schuster",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Kian.Kulas",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Annamarie62",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Willow72",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Thalia12",
      type: "currency",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `periods`                                                            | [components.MetricPeriod](../../models/components/metricperiod.md)[] | :heavy_check_mark:                                                   | List of data for each timestamp.                                     |
| `metrics`                                                            | [components.Metrics](../../models/components/metrics.md)             | :heavy_check_mark:                                                   | Information about the returned metrics.                              |