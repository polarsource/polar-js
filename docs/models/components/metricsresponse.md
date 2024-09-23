# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2023-05-07T15:59:30.529Z"),
      orders: 42489,
      revenue: 117546,
      averageOrderValue: 381654,
      oneTimeProducts: 885523,
      oneTimeProductsRevenue: 148038,
      newSubscriptions: 823990,
      newSubscriptionsRevenue: 14976,
      renewedSubscriptions: 457389,
      renewedSubscriptionsRevenue: 644397,
      activeSubscriptions: 60379,
      monthlyRecurringRevenue: 614763,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Tyreek_Renner18",
      type: "scalar",
    },
    revenue: {
      slug: "<value>",
      displayName: "Juvenal_Nolan",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Selmer.Zulauf22",
      type: "currency",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Oscar.Lueilwitz15",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Ellsworth.Blanda12",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Beth94",
      type: "scalar",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Melvina.Heaney",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Chad41",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Jaycee_Kuvalis",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Leland.Mayert",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Domenic.Batz",
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