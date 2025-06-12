# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [],
  totals: {
    orders: 1002.76,
    revenue: 8076.35,
    cumulativeRevenue: 711919,
    averageOrderValue: 963.89,
    oneTimeProducts: 690503,
    oneTimeProductsRevenue: 231.24,
    newSubscriptions: 5333.11,
    newSubscriptionsRevenue: 1430.84,
    renewedSubscriptions: 393486,
    renewedSubscriptionsRevenue: 732402,
    activeSubscriptions: 5510.54,
    monthlyRecurringRevenue: 275204,
    checkouts: 7126.24,
    succeededCheckouts: 649176,
    checkoutsConversion: 7565.12,
  },
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Carli17",
      type: "percentage",
    },
    revenue: {
      slug: "<value>",
      displayName: "Coleman_Kirlin",
      type: "percentage",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Keyshawn_Beer61",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Heidi37",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Talon50",
      type: "percentage",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Kory.Gulgowski",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Dax_Schulist",
      type: "scalar",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Oswaldo74",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Monserrate_Adams",
      type: "percentage",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Casper20",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Adell77",
      type: "currency",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Cyril34",
      type: "scalar",
    },
    checkouts: {
      slug: "<value>",
      displayName: "Clint61",
      type: "scalar",
    },
    succeededCheckouts: {
      slug: "<value>",
      displayName: "Elouise.Herzog-Kuphal93",
      type: "scalar",
    },
    checkoutsConversion: {
      slug: "<value>",
      displayName: "Gerald.Medhurst",
      type: "scalar",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `periods`                                                            | [components.MetricPeriod](../../models/components/metricperiod.md)[] | :heavy_check_mark:                                                   | List of data for each timestamp.                                     |
| `totals`                                                             | [components.MetricsTotals](../../models/components/metricstotals.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `metrics`                                                            | [components.Metrics](../../models/components/metrics.md)             | :heavy_check_mark:                                                   | N/A                                                                  |