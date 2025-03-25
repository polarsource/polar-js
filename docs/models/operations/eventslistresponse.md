# EventsListResponse

## Example Usage

```typescript
import { EventsListResponse } from "@polar-sh/sdk/models/operations/eventslist.js";

let value: EventsListResponse = {
  result: {
    items: [
      {
        metadata: {
          "key": "<value>",
        },
        id: "<value>",
        timestamp: new Date("2024-03-06T01:14:37.827Z"),
        name: "<value>",
        source: "system",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        customerId: "<value>",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2023-11-11T09:06:57.096Z"),
          modifiedAt: new Date("2025-10-11T15:52:27.215Z"),
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
            "FR61954506077",
            "eu_vat",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2025-07-09T21:22:18.501Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        externalCustomerId: "<id>",
      },
    ],
    pagination: {
      totalCount: 980187,
      maxPage: 526868,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |