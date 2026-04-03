# MetricDashboardCreate

Schema for creating a metrics dashboard.

## Example Usage

```typescript
import { MetricDashboardCreate } from "@polar-sh/sdk/models/components/metricdashboardcreate.js";

let value: MetricDashboardCreate = {
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Display name for the dashboard.                                                                      |                                                                                                      |
| `metrics`                                                                                            | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | List of metric slugs to display in this dashboard.                                                   |                                                                                                      |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The ID of the organization owning this dashboard. **Required unless you use an organization token.** | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                 |