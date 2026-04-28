# Meter

## Example Usage

```typescript
import { Meter } from "@polar-sh/sdk/models/components/meter.js";

let value: Meter = {
  metadata: {},
  createdAt: new Date("2024-07-17T04:53:21.925Z"),
  modifiedAt: null,
  id: "<value>",
  name: "<value>",
  unit: "scalar",
  filter: {
    conjunction: "or",
    clauses: [
      {
        property: "<value>",
        operator: "lt",
        value: false,
      },
    ],
  },
  aggregation: {
    func: "avg",
    property: "<value>",
  },
  organizationId: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `metadata`                                                                                    | Record<string, *components.MetadataOutputType*>                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the meter. Will be shown on customer's invoices and usage.                        |
| `unit`                                                                                        | [components.MeterUnit](../../models/components/meterunit.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customLabel`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The label for the custom unit.                                                                |
| `customMultiplier`                                                                            | *number*                                                                                      | :heavy_minus_sign:                                                                            | The multiplier to convert from base unit to display scale.                                    |
| `filter`                                                                                      | [components.Filter](../../models/components/filter.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `aggregation`                                                                                 | *components.MeterAggregation*                                                                 | :heavy_check_mark:                                                                            | The aggregation to apply on the filtered events to calculate the meter.                       |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the meter.                                                  |
| `archivedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Whether the meter is archived and the time it was archived.                                   |