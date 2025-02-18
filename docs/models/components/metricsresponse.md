# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2025-07-04T22:25:13.212Z"),
      orders: 623092,
      revenue: 71075,
      cumulativeRevenue: 57659,
      averageOrderValue: 528552,
      oneTimeProducts: 396772,
      oneTimeProductsRevenue: 735432,
      newSubscriptions: 628062,
      newSubscriptionsRevenue: 306,
      renewedSubscriptions: 16877,
      renewedSubscriptionsRevenue: 839715,
      activeSubscriptions: 164585,
      monthlyRecurringRevenue: 569596,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Tristin7",
      type: "scalar",
    },
    revenue: {
      slug: "<value>",
      displayName: "Ally.Carroll46",
      type: "currency",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Emerson_Abshire5",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Vesta_Heller32",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Michaela_Schuppe58",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Jovan_Mills",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Scottie51",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Baby_Morissette",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Gus_Jerde39",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Marcelo_Donnelly",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Matilde64",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Kathryn68",
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