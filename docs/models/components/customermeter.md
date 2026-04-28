# CustomerMeter

An active customer meter, with current consumed and credited units.

## Example Usage

```typescript
import { CustomerMeter } from "@polar-sh/sdk/models/components/customermeter.js";

let value: CustomerMeter = {
  id: "<value>",
  createdAt: new Date("2025-07-26T23:24:52.777Z"),
  modifiedAt: new Date("2024-06-26T00:19:50.084Z"),
  customerId: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
  meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
  consumedUnits: 25,
  creditedUnits: 100,
  balance: 75,
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-06-22T11:25:01.503Z"),
    modifiedAt: new Date("2025-03-08T22:28:33.764Z"),
    metadata: {
      "key": "<value>",
    },
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-04-01T21:44:43.705Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  meter: {
    metadata: {
      "key": 661.85,
    },
    createdAt: new Date("2025-08-16T16:57:16.542Z"),
    modifiedAt: null,
    id: "<value>",
    name: "<value>",
    unit: "token",
    filter: {
      conjunction: "or",
      clauses: [
        {
          property: "<value>",
          operator: "lt",
          value: false,
        },
      ],
    },
    aggregation: {
      func: "count",
    },
    organizationId: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |                                                                                               |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |                                                                                               |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the customer.                                                                       | 992fae2a-2a17-4b7a-8d9e-e287cf90131b                                                          |
| `meterId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the meter.                                                                          | d498a884-e2cd-4d3e-8002-f536468a8b22                                                          |
| `consumedUnits`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of consumed units.                                                                 | 25                                                                                            |
| `creditedUnits`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of credited units.                                                                 | 100                                                                                           |
| `balance`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The balance of the meter, i.e. the difference between credited and consumed units.            | 75                                                                                            |
| `customer`                                                                                    | *components.Customer*                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `meter`                                                                                       | [components.Meter](../../models/components/meter.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |