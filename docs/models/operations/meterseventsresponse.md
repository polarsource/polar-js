# MetersEventsResponse

## Example Usage

```typescript
import { MetersEventsResponse } from "@polar-sh/sdk/models/operations/metersevents.js";

let value: MetersEventsResponse = {
  result: {
    items: [
      {
        metadata: {
          "key": false,
        },
        id: "<value>",
        timestamp: new Date("2024-07-09T23:45:06.528Z"),
        name: "<value>",
        source: "system",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        customerId: "<value>",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-04-03T05:20:48.366Z"),
          modifiedAt: new Date("2025-05-20T15:30:16.716Z"),
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
            "FR61954506077",
            "eu_vat",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2024-07-17T10:28:48.696Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        externalCustomerId: "<id>",
      },
    ],
    pagination: {
      totalCount: 263949,
      maxPage: 196743,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |