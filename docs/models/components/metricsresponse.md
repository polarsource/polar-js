# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2023-10-30T23:05:13.740Z"),
      orders: 765419,
      revenue: 581098,
      averageOrderValue: 386441,
      oneTimeProducts: 681458,
      oneTimeProductsRevenue: 240101,
      newSubscriptions: 349551,
      newSubscriptionsRevenue: 71631,
      renewedSubscriptions: 816230,
      renewedSubscriptionsRevenue: 70999,
      activeSubscriptions: 298797,
      monthlyRecurringRevenue: 925633,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Keenan_Zemlak6",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Cloyd53",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Justine.Moore",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Palma_Kunde14",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Tiffany_Collier9",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Dana.Mosciski99",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Sebastian.Zieme",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Jarod25",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Caroline_Morar78",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Kim.Braun",
      type: "currency",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Reagan_Haley13",
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