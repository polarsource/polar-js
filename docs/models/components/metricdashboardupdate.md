# MetricDashboardUpdate

Schema for updating a metrics dashboard.

## Example Usage

```typescript
import { MetricDashboardUpdate } from "@polar-sh/sdk/models/components/metricdashboardupdate.js";

let value: MetricDashboardUpdate = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_minus_sign:                                 | Display name for the dashboard.                    |
| `metrics`                                          | *string*[]                                         | :heavy_minus_sign:                                 | List of metric slugs to display in this dashboard. |