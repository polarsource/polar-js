# CustomerSubscriptionMeter

## Example Usage

```typescript
import { CustomerSubscriptionMeter } from "@polar-sh/sdk/models/components/customersubscriptionmeter.js";

let value: CustomerSubscriptionMeter = {
  createdAt: new Date("2023-05-31T13:00:37.766Z"),
  modifiedAt: new Date("2025-05-29T17:54:25.258Z"),
  id: "<value>",
  consumedUnits: 25,
  creditedUnits: 100,
  amount: 0,
  meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
  meter: {
    createdAt: new Date("2023-05-13T23:55:31.561Z"),
    modifiedAt: new Date("2023-08-11T07:10:38.626Z"),
    id: "<value>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | Creation timestamp of the object.                                                                      |                                                                                                        |
| `modifiedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | Last modification timestamp of the object.                                                             |                                                                                                        |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the object.                                                                                  |                                                                                                        |
| `consumedUnits`                                                                                        | *number*                                                                                               | :heavy_check_mark:                                                                                     | The number of consumed units so far in this billing period.                                            | 25                                                                                                     |
| `creditedUnits`                                                                                        | *number*                                                                                               | :heavy_check_mark:                                                                                     | The number of credited units so far in this billing period.                                            | 100                                                                                                    |
| `amount`                                                                                               | *number*                                                                                               | :heavy_check_mark:                                                                                     | The amount due in cents so far in this billing period.                                                 | 0                                                                                                      |
| `meterId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the meter.                                                                                   | d498a884-e2cd-4d3e-8002-f536468a8b22                                                                   |
| `meter`                                                                                                | [components.CustomerSubscriptionMeterMeter](../../models/components/customersubscriptionmetermeter.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |