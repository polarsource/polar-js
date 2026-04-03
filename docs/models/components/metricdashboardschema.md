# MetricDashboardSchema

A user-defined metrics dashboard.

## Example Usage

```typescript
import { MetricDashboardSchema } from "@polar-sh/sdk/models/components/metricdashboardschema.js";

let value: MetricDashboardSchema = {
  createdAt: new Date("2024-10-10T10:07:20.805Z"),
  modifiedAt: null,
  id: "<value>",
  name: "<value>",
  metrics: [
    "<value 1>",
  ],
  organizationId: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Display name for the dashboard.                                                               |
| `metrics`                                                                                     | *string*[]                                                                                    | :heavy_check_mark:                                                                            | List of metric slugs displayed in this dashboard.                                             |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning this dashboard.                                             |