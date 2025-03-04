# Meter

## Example Usage

```typescript
import { Meter } from "@polar-sh/sdk/models/components/meter.js";

let value: Meter = {
  metadata: {
    "key": 370879,
  },
  createdAt: new Date("2023-04-17T00:52:37.415Z"),
  modifiedAt: new Date("2024-06-24T17:08:37.720Z"),
  id: "<value>",
  name: "<value>",
  filter: {
    conjunction: "and",
    clauses: [],
  },
  aggregation: {
    func: "min",
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