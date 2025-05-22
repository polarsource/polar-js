# SubscriptionMeter

Current consumption and spending for a subscription meter.

## Example Usage

```typescript
import { SubscriptionMeter } from "@polar-sh/sdk/models/components/subscriptionmeter.js";

let value: SubscriptionMeter = {
  createdAt: new Date("2024-12-11T10:04:45.653Z"),
  modifiedAt: new Date("2023-09-01T23:39:35.995Z"),
  id: "<value>",
  consumedUnits: 25,
  creditedUnits: 100,
  amount: 0,
  meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
  meter: {
    metadata: {
      "key": false,
    },
    createdAt: new Date("2023-09-27T12:45:23.148Z"),
    modifiedAt: new Date("2023-09-28T00:55:30.553Z"),
    id: "<value>",
    name: "<value>",
    filter: {
      conjunction: "and",
      clauses: [],
    },
    aggregation: {
      func: "max",
      property: "<value>",
    },
    organizationId: "<value>",
  },
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
| `meter`                                                                                       | [components.Meter](../../models/components/meter.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |