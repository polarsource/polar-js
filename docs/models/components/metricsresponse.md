# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2025-10-24T11:05:44.448Z"),
      orders: 875166,
      revenue: 706234,
      averageOrderValue: 936960,
      oneTimeProducts: 462267,
      oneTimeProductsRevenue: 713256,
      newSubscriptions: 4087,
      newSubscriptionsRevenue: 568581,
      renewedSubscriptions: 723689,
      renewedSubscriptionsRevenue: 383012,
      activeSubscriptions: 867919,
      monthlyRecurringRevenue: 485068,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Easter_Ullrich",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Lloyd.Rodriguez57",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Wilhelm49",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Mariane.Thiel3",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Cristopher.Bednar83",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Bert.Sawayn",
      type: "scalar",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Cortney.Pollich28",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Alice.Jakubowski48",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Landen_Koepp13",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Greta.Feeney82",
      type: "currency",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Isadore_Nicolas82",
      type: "scalar",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `periods`                                                            | [components.MetricPeriod](../../models/components/metricperiod.md)[] | :heavy_check_mark:                                                   | List of data for each timestamp.                                     |
| `metrics`                                                            | [components.Metrics](../../models/components/metrics.md)             | :heavy_check_mark:                                                   | N/A                                                                  |