# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2023-06-09T03:01:47.083Z"),
      orders: 123490,
      revenue: 853228,
      averageOrderValue: 259777,
      oneTimeProducts: 404003,
      oneTimeProductsRevenue: 47423,
      newSubscriptions: 149142,
      newSubscriptionsRevenue: 1789,
      renewedSubscriptions: 360035,
      renewedSubscriptionsRevenue: 810688,
      activeSubscriptions: 575779,
      monthlyRecurringRevenue: 839906,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Chanelle11",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Janet.Kunde74",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Cordie38",
      type: "currency",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Jamil.Lehner",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Edyth_Russel",
      type: "scalar",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Glen71",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Jazmyn.Hilpert31",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Zachary_Schroeder68",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Sheila_Parisian71",
      type: "currency",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Braden51",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Chandler.Kub95",
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