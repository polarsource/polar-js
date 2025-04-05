# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components/metricsresponse.js";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2023-10-15T16:25:17.974Z"),
      orders: 739998,
      revenue: 100276,
      cumulativeRevenue: 717562,
      averageOrderValue: 807635,
      oneTimeProducts: 242757,
      oneTimeProductsRevenue: 711919,
      newSubscriptions: 627843,
      newSubscriptionsRevenue: 96389,
      renewedSubscriptions: 241207,
      renewedSubscriptionsRevenue: 690503,
      activeSubscriptions: 976045,
      monthlyRecurringRevenue: 23124,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Nellie.Ratke",
      type: "scalar",
    },
    revenue: {
      slug: "<value>",
      displayName: "Moshe27",
      type: "currency",
    },
    cumulativeRevenue: {
      slug: "<value>",
      displayName: "Freeda_Volkman",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Horace_Walter",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Tatum_Konopelski57",
      type: "scalar",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Myrna.Goyette41",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Osborne.Terry91",
      type: "scalar",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Koby57",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Fernando.Langosh",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Olin78",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Cierra72",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Mallie16",
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