# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2024-01-14T18:49:36.050Z"),
      orders: 953960,
      revenue: 151023,
      averageOrderValue: 794154,
      oneTimeProducts: 420626,
      oneTimeProductsRevenue: 929687,
      newSubscriptions: 686991,
      newSubscriptionsRevenue: 147165,
      renewedSubscriptions: 32474,
      renewedSubscriptionsRevenue: 125622,
      activeSubscriptions: 712690,
      monthlyRecurringRevenue: 10541,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Javier.Schulist0",
      type: "scalar",
    },
    revenue: {
      slug: "<value>",
      displayName: "Willa22",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Joaquin.Toy76",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Westley_OKon2",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Jackeline.Klein90",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Addison_DuBuque39",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Emil26",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Aliya.Kuphal",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Nels_Kuhn",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Jolie38",
      type: "currency",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Arnold39",
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