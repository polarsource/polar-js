# CustomerCustomerMeter

## Example Usage

```typescript
import { CustomerCustomerMeter } from "@polar-sh/sdk/models/components/customercustomermeter.js";

let value: CustomerCustomerMeter = {
  id: "<value>",
  createdAt: new Date("2025-12-16T23:18:15.511Z"),
  modifiedAt: new Date("2023-06-10T08:09:24.344Z"),
  customerId: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
  meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
  consumedUnits: 25,
  creditedUnits: 100,
  balance: 75,
  meter: {
    createdAt: new Date("2024-07-09T14:31:46.959Z"),
    modifiedAt: new Date("2024-10-28T13:02:25.281Z"),
    id: "<value>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the object.                                                                          |                                                                                                |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Creation timestamp of the object.                                                              |                                                                                                |
| `modifiedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Last modification timestamp of the object.                                                     |                                                                                                |
| `customerId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the customer.                                                                        | 992fae2a-2a17-4b7a-8d9e-e287cf90131b                                                           |
| `meterId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the meter.                                                                           | d498a884-e2cd-4d3e-8002-f536468a8b22                                                           |
| `consumedUnits`                                                                                | *number*                                                                                       | :heavy_check_mark:                                                                             | The number of consumed units.                                                                  | 25                                                                                             |
| `creditedUnits`                                                                                | *number*                                                                                       | :heavy_check_mark:                                                                             | The number of credited units.                                                                  | 100                                                                                            |
| `balance`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | The balance of the meter, i.e. the difference between credited and consumed units.             | 75                                                                                             |
| `meter`                                                                                        | [components.CustomerCustomerMeterMeter](../../models/components/customercustomermetermeter.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |