# MeterQuantities

## Example Usage

```typescript
import { MeterQuantities } from "@polar-sh/sdk/models/components/meterquantities.js";

let value: MeterQuantities = {
  quantities: [
    {
      timestamp: new Date("2023-10-13T06:54:33.113Z"),
      quantity: 1525.71,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `quantities`                                                           | [components.MeterQuantity](../../models/components/meterquantity.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |