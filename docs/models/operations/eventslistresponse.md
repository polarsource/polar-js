# EventsListResponse

## Example Usage

```typescript
import { EventsListResponse } from "@polar-sh/sdk/models/operations/eventslist.js";

let value: EventsListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        timestamp: new Date("2025-04-30T06:44:33.208Z"),
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        customerId: "<value>",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2024-03-11T16:11:12.405Z"),
          modifiedAt: new Date("2024-05-26T23:55:45.640Z"),
          metadata: {},
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
          deletedAt: new Date("2024-09-12T11:45:35.154Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
        },
        externalCustomerId: "<id>",
        childCount: 0,
        label: "<value>",
        name: "<value>",
        source: "user",
        metadata: {
          "key": {
            amount: "51.41",
            currency: "Swedish Krona",
          },
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |