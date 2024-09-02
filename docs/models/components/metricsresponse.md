# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
    periods: [
        {
            timestamp: new Date("2023-12-06T00:25:13.582Z"),
            orders: 376389,
            revenue: 254025,
            averageOrderValue: 364912,
            oneTimeProducts: 551079,
            oneTimeProductsRevenue: 260904,
            newSubscriptions: 131903,
            newSubscriptionsRevenue: 495970,
            renewedSubscriptions: 200516,
            renewedSubscriptionsRevenue: 681740,
            activeSubscriptions: 514054,
            monthlyRecurringRevenue: 277340,
        },
    ],
    metrics: {
        orders: {
            slug: "<value>",
            displayName: "Avis.Leffler39",
            type: "scalar",
        },
        revenue: {
            slug: "<value>",
            displayName: "Daron_Beahan",
            type: "currency",
        },
        averageOrderValue: {
            slug: "<value>",
            displayName: "Abel57",
            type: "currency",
        },
        oneTimeProducts: {
            slug: "<value>",
            displayName: "Cecil_Bode97",
            type: "currency",
        },
        oneTimeProductsRevenue: {
            slug: "<value>",
            displayName: "Leola50",
            type: "currency",
        },
        newSubscriptions: {
            slug: "<value>",
            displayName: "Elisa.Smith",
            type: "currency",
        },
        newSubscriptionsRevenue: {
            slug: "<value>",
            displayName: "Hassie.Lebsack72",
            type: "currency",
        },
        renewedSubscriptions: {
            slug: "<value>",
            displayName: "Alexane.Hilpert",
            type: "scalar",
        },
        renewedSubscriptionsRevenue: {
            slug: "<value>",
            displayName: "Dell57",
            type: "currency",
        },
        activeSubscriptions: {
            slug: "<value>",
            displayName: "Luigi.Koch",
            type: "currency",
        },
        monthlyRecurringRevenue: {
            slug: "<value>",
            displayName: "Ethan_Marquardt94",
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