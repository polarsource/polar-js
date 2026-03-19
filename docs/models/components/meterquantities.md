# MeterQuantities

## Example Usage

```typescript
import { MeterQuantities } from "@polar-sh/sdk/models/components/meterquantities.js";

let value: MeterQuantities = {
  quantities: [],
  total: 100,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `quantities`                                                           | [components.MeterQuantity](../../models/components/meterquantity.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `total`                                                                | *number*                                                               | :heavy_check_mark:                                                     | The total quantity for the period.                                     | 100                                                                    |