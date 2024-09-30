# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-02-11T17:46:51.214Z"),
      orders: 167786,
      revenue: 735959,
      averageOrderValue: 557852,
      oneTimeProducts: 108673,
      oneTimeProductsRevenue: 905123,
      newSubscriptions: 902318,
      newSubscriptionsRevenue: 627864,
      renewedSubscriptions: 419641,
      renewedSubscriptionsRevenue: 237924,
      activeSubscriptions: 97600,
      monthlyRecurringRevenue: 806000,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Vito.Kris",
      type: "scalar",
    },
    revenue: {
      slug: "<value>",
      displayName: "Agustina68",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Aliya_White",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Kasandra_Kuhlman",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Jacklyn2",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Dulce_Heaney97",
      type: "scalar",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Doyle21",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Sister.Reilly",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Florida.Davis80",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Clarissa_Jerde-Hyatt6",
      type: "currency",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Emmanuel_Bahringer54",
      type: "scalar",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `periods`                                                            | [components.MetricPeriod](../../models/components/metricperiod.md)[] | :heavy_check_mark:                                                   | List of data for each timestamp.                                     |
| `metrics`                                                            | [components.Metrics](../../models/components/metrics.md)             | :heavy_check_mark:                                                   | Information about the returned metrics.                              |