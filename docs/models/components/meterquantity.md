# MeterQuantity

## Example Usage

```typescript
import { MeterQuantity } from "@polar-sh/sdk/models/components/meterquantity.js";

let value: MeterQuantity = {
  timestamp: new Date("2023-10-09T08:12:15.828Z"),
  quantity: 4774.31,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp for the current period.                                                         |
| `quantity`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | The quantity for the current period.                                                          |