# CustomerMeter

An active customer meter, with current consumed and credited units.

## Example Usage

```typescript
import { CustomerMeter } from "@polar-sh/sdk/models/components/customermeter.js";

let value: CustomerMeter = {
  id: "<value>",
  createdAt: new Date("2024-07-26T23:24:52.777Z"),
  modifiedAt: new Date("2023-06-27T00:19:50.084Z"),
  customerId: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
  meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
  consumedUnits: 25,
  creditedUnits: 100,
  balance: 75,
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-07-12T03:53:00.913Z"),
    modifiedAt: new Date("2024-04-26T10:19:45.222Z"),
    metadata: {
      "key": 5951.8,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-07-29T02:37:49.390Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  meter: {
    metadata: {
      "key": 645986,
    },
    createdAt: new Date("2025-04-20T02:42:18.399Z"),
    modifiedAt: new Date("2023-07-17T20:52:33.753Z"),
    id: "<value>",
    name: "<value>",
    filter: {
      conjunction: "and",
      clauses: [],
    },
    aggregation: {
      func: "min",
      property: "<value>",
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
| `customer`                                                                                    | [components.Customer](../../models/components/customer.md)                                    | :heavy_check_mark:                                                                            | A customer in an organization.                                                                |                                                                                               |
| `meter`                                                                                       | [components.Meter](../../models/components/meter.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |