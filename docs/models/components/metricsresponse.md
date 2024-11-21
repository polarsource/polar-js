# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-01-18T14:16:00.694Z"),
      orders: 146508,
      revenue: 136721,
      averageOrderValue: 885840,
      oneTimeProducts: 14267,
      oneTimeProductsRevenue: 679764,
      newSubscriptions: 804786,
      newSubscriptionsRevenue: 717913,
      renewedSubscriptions: 144409,
      renewedSubscriptionsRevenue: 640504,
      activeSubscriptions: 123486,
      monthlyRecurringRevenue: 462247,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Madelynn_Larson31",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Jayne.Wilkinson",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Janie_Considine",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Aaliyah77",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Karlee_Wiza47",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Adriana52",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Ansel_Klocko78",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Alex23",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Narciso51",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Adolfo89",
      type: "currency",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Christelle33",
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