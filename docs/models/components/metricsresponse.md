# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-01-30T12:25:01.962Z"),
      orders: 926748,
      revenue: 117208,
      averageOrderValue: 134387,
      oneTimeProducts: 975228,
      oneTimeProductsRevenue: 91236,
      newSubscriptions: 42895,
      newSubscriptionsRevenue: 531754,
      renewedSubscriptions: 224411,
      renewedSubscriptionsRevenue: 297626,
      activeSubscriptions: 617894,
      monthlyRecurringRevenue: 351246,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Zelda43",
      type: "scalar",
    },
    revenue: {
      slug: "<value>",
      displayName: "Aubrey.Adams",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Deron.Ondricka",
      type: "currency",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Ozella_Goyette53",
      type: "scalar",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Nicholaus_Nikolaus58",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Breanna0",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Susanna7",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Mireya65",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Roderick70",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Mia38",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Easter_Ullrich",
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