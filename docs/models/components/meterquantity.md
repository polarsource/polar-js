# MeterQuantity

## Example Usage

```typescript
import { MeterQuantity } from "@polar-sh/sdk/models/components/meterquantity.js";

let value: MeterQuantity = {
  timestamp: new Date("2023-06-24T17:26:47.807Z"),
  quantity: 8899.46,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp for the current period.                                                         |
| `quantity`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | The quantity for the current period.                                                          |