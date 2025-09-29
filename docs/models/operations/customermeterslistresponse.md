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
          createdAt: new Date("2024-04-26T10:19:45.222Z"),
          modifiedAt: new Date("2025-02-01T06:50:40.155Z"),
          metadata: {
            "key": "<value>",
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
          deletedAt: new Date("2025-09-01T02:27:46.266Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
        },
        meter: {
          metadata: {},
          createdAt: new Date("2023-04-30T10:26:58.812Z"),
          modifiedAt: new Date("2025-02-17T07:09:21.144Z"),
          id: "<value>",
          name: "<value>",
          filter: {
            conjunction: "or",
            clauses: [],
          },
          aggregation: {},
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 607201,
      maxPage: 808600,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerMeter](../../models/components/listresourcecustomermeter.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |