# Meter

## Example Usage

```typescript
import { Meter } from "@polar-sh/sdk/models/components/meter.js";

let value: Meter = {
  metadata: {
    "key": false,
  },
  createdAt: new Date("2024-03-02T09:50:18.418Z"),
  modifiedAt: new Date("2025-07-06T08:09:01.868Z"),
  id: "<value>",
  name: "<value>",
  filter: {
    conjunction: "or",
    clauses: [],
  },
  aggregation: {
    func: "max",
    property: "<value>",
  },
  organizationId: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `metadata`                                                                                    | Record<string, *components.MeterMetadata*>                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the meter. Will be shown on customer's invoices and usage.                        |
| `filter`                                                                                      | [components.Filter](../../models/components/filter.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `aggregation`                                                                                 | *components.MeterAggregation*                                                                 | :heavy_check_mark:                                                                            | The aggregation to apply on the filtered events to calculate the meter.                       |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the meter.                                                  |