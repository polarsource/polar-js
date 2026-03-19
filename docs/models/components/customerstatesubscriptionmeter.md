# CustomerStateSubscriptionMeter

Current consumption and spending for a subscription meter.

## Example Usage

```typescript
import { CustomerStateSubscriptionMeter } from "@polar-sh/sdk/models/components/customerstatesubscriptionmeter.js";

let value: CustomerStateSubscriptionMeter = {
  createdAt: new Date("2025-11-14T21:59:47.289Z"),
  modifiedAt: new Date("2026-06-09T04:40:55.250Z"),
  id: "<value>",
  consumedUnits: 25,
  creditedUnits: 100,
  amount: 0,
  meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |                                                                                               |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |                                                                                               |
| `consumedUnits`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of consumed units so far in this billing period.                                   | 25                                                                                            |
| `creditedUnits`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of credited units so far in this billing period.                                   | 100                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | The amount due in cents so far in this billing period.                                        | 0                                                                                             |
| `meterId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the meter.                                                                          | d498a884-e2cd-4d3e-8002-f536468a8b22                                                          |