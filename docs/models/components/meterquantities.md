# MeterQuantities

## Example Usage

```typescript
import { MeterQuantities } from "@polar-sh/sdk/models/components/meterquantities.js";

let value: MeterQuantities = {
  quantities: [
    {
      timestamp: new Date("2023-08-14T10:53:30.820Z"),
      quantity: 9896.91,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `quantities`                                                           | [components.MeterQuantity](../../models/components/meterquantity.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |