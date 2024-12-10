# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2023-06-15T01:48:27.572Z"),
      orders: 969826,
      revenue: 281531,
      averageOrderValue: 669828,
      oneTimeProducts: 844281,
      oneTimeProductsRevenue: 939456,
      newSubscriptions: 25326,
      newSubscriptionsRevenue: 845119,
      renewedSubscriptions: 81399,
      renewedSubscriptionsRevenue: 313386,
      activeSubscriptions: 742652,
      monthlyRecurringRevenue: 368239,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Anabelle.Lynch",
      type: "currency",
    },
    revenue: {
      slug: "<value>",
      displayName: "Helen.Hessel83",
      type: "currency",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Osvaldo7",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Gage.Kihn",
      type: "currency",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Nils_Schamberger82",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Griffin.Cummerata9",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Noe.Mohr",
      type: "scalar",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Russell.Johnson20",
      type: "scalar",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Friedrich.Hagenes",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Carolyn44",
      type: "currency",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Blaise_Gleichner",
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