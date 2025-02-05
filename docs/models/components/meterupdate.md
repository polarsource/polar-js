# MeterUpdate

## Example Usage

```typescript
import { MeterUpdate } from "@polar-sh/sdk/models/components/meterupdate.js";

let value: MeterUpdate = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `metadata`                                                              | Record<string, *components.MeterUpdateMetadata*>                        | :heavy_minus_sign:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | The name of the meter. Will be shown on customer's invoices and usage.  |
| `filter`                                                                | [components.Filter](../../models/components/filter.md)                  | :heavy_minus_sign:                                                      | The filter to apply on events that'll be used to calculate the meter.   |
| `aggregation`                                                           | *components.Aggregation*                                                | :heavy_minus_sign:                                                      | The aggregation to apply on the filtered events to calculate the meter. |