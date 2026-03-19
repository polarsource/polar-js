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
          createdAt: new Date("2024-06-04T21:28:32.740Z"),
          modifiedAt: new Date("2024-03-21T15:56:34.258Z"),
          metadata: {
            "key": "<value>",
          },
          externalId: "usr_1337",
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
          deletedAt: new Date("2026-09-04T17:38:48.600Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
        },
        meter: {
          metadata: {},
          createdAt: new Date("2026-01-05T19:13:23.632Z"),
          modifiedAt: new Date("2026-10-09T02:26:38.751Z"),
          id: "<value>",
          name: "<value>",
          filter: {
            conjunction: "or",
            clauses: [],
          },
          aggregation: {
            func: "unique",
            property: "<value>",
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