# MetersEventsResponse

## Example Usage

```typescript
import { MetersEventsResponse } from "@polar-sh/sdk/models/operations/metersevents.js";

let value: MetersEventsResponse = {
  result: {
    items: [
      {
        metadata: {
          "key": 151171,
        },
        id: "<value>",
        timestamp: new Date("2025-11-27T09:34:55.765Z"),
        name: "<value>",
        source: "system",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        customerId: "<value>",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2024-01-02T16:02:26.316Z"),
          modifiedAt: new Date("2025-04-23T20:51:58.248Z"),
          metadata: {
            "key": false,
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
          deletedAt: new Date("2023-04-08T01:57:49.131Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        externalCustomerId: "<id>",
      },
    ],
    pagination: {
      totalCount: 33417,
      maxPage: 561672,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |