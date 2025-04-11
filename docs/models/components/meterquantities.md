# MeterQuantities

## Example Usage

```typescript
import { MeterQuantities } from "@polar-sh/sdk/models/components/meterquantities.js";

let value: MeterQuantities = {
  quantities: [
    {
      timestamp: new Date("2023-02-12T02:54:23.217Z"),
      quantity: 10,
    },
  ],
  total: 100,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `quantities`                                                           | [components.MeterQuantity](../../models/components/meterquantity.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `total`                                                                | *number*                                                               | :heavy_check_mark:                                                     | The total quantity for the period.                                     | 100                                                                    |