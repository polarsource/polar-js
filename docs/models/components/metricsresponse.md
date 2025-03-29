# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-05-13T06:24:30.263Z"),
      orders: 942869,
      revenue: 450574,
      cumulativeRevenue: 127032,
      averageOrderValue: 907301,
      oneTimeProducts: 5116,
      oneTimeProductsRevenue: 758764,
      newSubscriptions: 8337,
      newSubscriptionsRevenue: 463215,
      renewedSubscriptions: 205546,
      renewedSubscriptionsRevenue: 951663,
      activeSubscriptions: 396740,
      monthlyRecurringRevenue: 30952,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Orie.Nikolaus43",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Jamaal.Welch",
      type: "currency",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Gretchen.Terry65",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Lorine_Cronin",
      type: "currency",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Mario.Mann",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Osbaldo.Gusikowski-Daniel",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Arjun_Kuhn",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Karlie80",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Colten.Tromp49",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Laila_Kassulke",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Clay_Hirthe",
      type: "currency",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Xzavier.Larson1",
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