# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-02-10T17:25:58.582Z"),
      orders: 665678,
      revenue: 634786,
      averageOrderValue: 29634,
      oneTimeProducts: 959143,
      oneTimeProductsRevenue: 889288,
      newSubscriptions: 103298,
      newSubscriptionsRevenue: 682119,
      renewedSubscriptions: 867168,
      renewedSubscriptionsRevenue: 891315,
      activeSubscriptions: 29190,
      monthlyRecurringRevenue: 1207,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Kaelyn_Wehner",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Petra.Hickle35",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Rosetta_Leannon72",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Lorena8",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Arvid0",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Albin6",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Anna.Fadel16",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Keenan_Vandervort45",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Candice71",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Hertha34",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Oswald.Jones92",
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