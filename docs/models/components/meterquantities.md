# MeterQuantities

## Example Usage

```typescript
import { MeterQuantities } from "@polar-sh/sdk/models/components/meterquantities.js";

let value: MeterQuantities = {
  quantities: [
    {
      timestamp: new Date("2025-10-01T21:33:32.957Z"),
      quantity: 9139.45,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `quantities`                                                           | [components.MeterQuantity](../../models/components/meterquantity.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |