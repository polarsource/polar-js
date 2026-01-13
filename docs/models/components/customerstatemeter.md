# CustomerStateMeter

An active meter for a customer, with latest consumed and credited units.

## Example Usage

```typescript
import { CustomerStateMeter } from "@polar-sh/sdk/models/components/customerstatemeter.js";

let value: CustomerStateMeter = {
  id: "<value>",
  createdAt: new Date("2025-11-22T20:57:08.686Z"),
  modifiedAt: new Date("2024-09-19T20:48:46.999Z"),
  meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
  consumedUnits: 25,
  creditedUnits: 100,
  balance: 75,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |                                                                                               |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |                                                                                               |
| `meterId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the meter.                                                                          | d498a884-e2cd-4d3e-8002-f536468a8b22                                                          |
| `consumedUnits`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of consumed units.                                                                 | 25                                                                                            |
| `creditedUnits`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of credited units.                                                                 | 100                                                                                           |
| `balance`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The balance of the meter, i.e. the difference between credited and consumed units.            | 75                                                                                            |