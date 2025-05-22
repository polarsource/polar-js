# CustomerMetersListResponse

## Example Usage

```typescript
import { CustomerMetersListResponse } from "@polar-sh/sdk/models/operations/customermeterslist.js";

let value: CustomerMetersListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2025-10-30T01:14:46.675Z"),
        modifiedAt: new Date("2024-03-26T17:04:15.059Z"),
        customerId: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        consumedUnits: 25,
        creditedUnits: 100,
        balance: 75,
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2023-04-10T10:19:51.334Z"),
          modifiedAt: new Date("2023-03-03T06:46:05.549Z"),
          metadata: {
            "key": 2245.8,
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "FR",
          },
          taxId: [
            "FR61954506077",
            "eu_vat",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2023-09-04T06:51:34.545Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        meter: {
          metadata: {
            "key": false,
          },
          createdAt: new Date("2025-01-23T09:02:41.952Z"),
          modifiedAt: new Date("2025-07-26T09:42:30.311Z"),
          id: "<value>",
          name: "<value>",
          filter: {
            conjunction: "or",
            clauses: [],
          },
          aggregation: {
            func: "min",
            property: "<value>",
          },
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 66185,
      maxPage: 541703,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerMeter](../../models/components/listresourcecustomermeter.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |