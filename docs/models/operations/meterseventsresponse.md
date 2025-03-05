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
        timestamp: new Date("2023-01-02T02:46:04.757Z"),
        name: "<value>",
        source: "system",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        customerId: "<value>",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2023-10-29T02:06:17.083Z"),
          modifiedAt: new Date("2025-05-01T17:47:08.087Z"),
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
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        externalCustomerId: "<id>",
      },
    ],
    pagination: {
      totalCount: 261627,
      maxPage: 192798,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |