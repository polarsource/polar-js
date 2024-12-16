# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
  periods: [
    {
      timestamp: new Date("2023-07-03T20:36:53.375Z"),
      orders: 929821,
      revenue: 694286,
      averageOrderValue: 340087,
      oneTimeProducts: 303843,
      oneTimeProductsRevenue: 661287,
      newSubscriptions: 88804,
      newSubscriptionsRevenue: 365410,
      renewedSubscriptions: 478678,
      renewedSubscriptionsRevenue: 760518,
      activeSubscriptions: 325517,
      monthlyRecurringRevenue: 792152,
    },
  ],
  metrics: {
    orders: {
      slug: "<value>",
      displayName: "Otho_Dicki49",
      type: "scalar",
    },
    revenue: {
      slug: "<value>",
      displayName: "Lisa.DuBuque-Cremin",
      type: "scalar",
    },
    averageOrderValue: {
      slug: "<value>",
      displayName: "Dante.Deckow24",
      type: "scalar",
    },
    oneTimeProducts: {
      slug: "<value>",
      displayName: "Gust63",
      type: "scalar",
    },
    oneTimeProductsRevenue: {
      slug: "<value>",
      displayName: "Geovanny.Abernathy-Koelpin82",
      type: "currency",
    },
    newSubscriptions: {
      slug: "<value>",
      displayName: "Abby_Hammes40",
      type: "currency",
    },
    newSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Adonis_Kuphal31",
      type: "currency",
    },
    renewedSubscriptions: {
      slug: "<value>",
      displayName: "Adelia.Breitenberg16",
      type: "currency",
    },
    renewedSubscriptionsRevenue: {
      slug: "<value>",
      displayName: "Ramona_Bruen",
      type: "scalar",
    },
    activeSubscriptions: {
      slug: "<value>",
      displayName: "Nyah7",
      type: "scalar",
    },
    monthlyRecurringRevenue: {
      slug: "<value>",
      displayName: "Mollie_Labadie",
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