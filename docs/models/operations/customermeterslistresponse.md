# CustomerMetersListResponse

## Example Usage

```typescript
import { CustomerMetersListResponse } from "@polar-sh/sdk/models/operations/customermeterslist.js";

let value: CustomerMetersListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2025-03-26T17:04:15.059Z"),
        modifiedAt: null,
        customerId: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        consumedUnits: 25,
        creditedUnits: 100,
        balance: 75,
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2026-01-05T19:13:23.632Z"),
          modifiedAt: new Date("2026-10-09T02:26:38.751Z"),
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
          deletedAt: new Date("2026-07-26T09:42:30.311Z"),
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
      },
    ],
    pagination: {
      totalCount: 296266,
      maxPage: 544155,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerMeter](../../models/components/listresourcecustomermeter.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |