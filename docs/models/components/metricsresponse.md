# MetricsResponse

Metrics response schema.

## Example Usage

```typescript
import { MetricsResponse } from "@polar-sh/sdk/models/components";

let value: MetricsResponse = {
    periods: [
        {
            timestamp: new Date("2024-12-18T03:13:18.068Z"),
            orders: 918092,
            revenue: 759283,
            averageOrderValue: 579681,
            oneTimeProducts: 364544,
            oneTimeProductsRevenue: 455898,
            newSubscriptions: 501063,
            newSubscriptionsRevenue: 642352,
            renewedSubscriptions: 376389,
            renewedSubscriptionsRevenue: 254025,
            activeSubscriptions: 364912,
            monthlyRecurringRevenue: 551079,
        },
    ],
    metrics: {
        orders: {
            slug: "<value>",
            displayName: "Devin.Cole",
            type: "currency",
        },
        revenue: {
            slug: "<value>",
            displayName: "Jordan52",
            type: "currency",
        },
        averageOrderValue: {
            slug: "<value>",
            displayName: "Bianka23",
            type: "scalar",
        },
        oneTimeProducts: {
            slug: "<value>",
            displayName: "Kyle.Witting60",
            type: "scalar",
        },
        oneTimeProductsRevenue: {
            slug: "<value>",
            displayName: "Kole8",
            type: "currency",
        },
        newSubscriptions: {
            slug: "<value>",
            displayName: "Shanny_Wolff96",
            type: "scalar",
        },
        newSubscriptionsRevenue: {
            slug: "<value>",
            displayName: "Joesph83",
            type: "currency",
        },
        renewedSubscriptions: {
            slug: "<value>",
            displayName: "Hassan_Waters",
            type: "currency",
        },
        renewedSubscriptionsRevenue: {
            slug: "<value>",
            displayName: "Dock.Reichert37",
            type: "scalar",
        },
        activeSubscriptions: {
            slug: "<value>",
            displayName: "Abbie97",
            type: "scalar",
        },
        monthlyRecurringRevenue: {
            slug: "<value>",
            displayName: "King.Stokes",
            type: "scalar",
        },
    },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `periods`                                                            | [components.MetricPeriod](../../models/components/metricperiod.md)[] | :heavy_check_mark:                                                   | List of data for each timestamp.                                     |
| `metrics`                                                            | [components.Metrics](../../models/components/metrics.md)             | :heavy_check_mark:                                                   | Information about the returned metrics.                              |