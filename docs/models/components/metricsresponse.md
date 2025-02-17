# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2023-06-16T02:33:31.041Z"),
      orders: 281986,
      revenue: 63025,
      cumulativeRevenue: 218108,
      averageOrderValue: 37808,
      oneTimeProducts: 698339,
      oneTimeProductsRevenue: 404429,
      newSubscriptions: 377668,
      newSubscriptionsRevenue: 485638,
      renewedSubscriptions: 261294,
      renewedSubscriptionsRevenue: 360333,
      activeSubscriptions: 590966,
      monthlyRecurringRevenue: 224524,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Jakob.Conn",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Darien.Schuster",
      type: "scalar",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Lottie.Senger12",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Aylin95",
      type: "currency",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Dayna27",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Kathryn_Langworth88",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Evert_Hilll73",
      type: "scalar",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Abdul.Feil66",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Caroline.Wunsch",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Jovanny.Toy75",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Kameron74",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Katelin.Becker",
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