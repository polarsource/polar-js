# CustomerMetersListResponse

## Example Usage

```typescript
import { CustomerMetersListResponse } from "@polar-sh/sdk/models/operations/customermeterslist.js";

let value: CustomerMetersListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2024-03-26T17:04:15.059Z"),
        modifiedAt: null,
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
          metadata: {},
          createdAt: new Date("2023-09-28T00:55:30.553Z"),
          modifiedAt: new Date("2024-07-25T21:43:09.563Z"),
          id: "<value>",
          name: "<value>",
          filter: {
            conjunction: "and",
            clauses: [],
          },
          aggregation: {
            func: "avg",
            property: "<value>",
          },
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 47105,
      maxPage: 607201,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerMeter](../../models/components/listresourcecustomermeter.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |