# ListResourceCustomerMeter

## Example Usage

```typescript
import { ListResourceCustomerMeter } from "@polar-sh/sdk/models/components/listresourcecustomermeter.js";

let value: ListResourceCustomerMeter = {
  items: [
    {
      id: "<value>",
      createdAt: new Date("2023-05-05T19:48:48.802Z"),
      modifiedAt: new Date("2023-01-08T03:03:24.785Z"),
      customerId: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
      consumedUnits: 25,
      creditedUnits: 100,
      balance: 75,
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2024-02-18T23:48:33.732Z"),
        modifiedAt: new Date("2025-02-20T23:29:16.896Z"),
        metadata: {
          "key": 4919.14,
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "FR",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2023-09-24T15:24:00.779Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      meter: {
        metadata: {
          "key": 75584,
        },
        createdAt: new Date("2023-01-03T12:42:19.655Z"),
        modifiedAt: new Date("2023-01-19T23:37:20.832Z"),
        id: "<value>",
        name: "<value>",
        filter: {
          conjunction: "or",
          clauses: [],
        },
        aggregation: {
          func: "max",
          property: "<value>",
        },
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 74516,
    maxPage: 498144,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerMeter](../../models/components/customermeter.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |