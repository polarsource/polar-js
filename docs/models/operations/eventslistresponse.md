# EventsListResponse

## Example Usage

```typescript
import { EventsListResponse } from "@polar-sh/sdk/models/operations/eventslist.js";

let value: EventsListResponse = {
  result: {
    items: [
      {
        metadata: {
          "key": false,
        },
        id: "<value>",
        timestamp: new Date("2024-10-08T23:12:56.036Z"),
        name: "<value>",
        source: "user",
        organizationId: "<value>",
        customerId: "<value>",
        externalCustomerId: "<id>",
      },
    ],
    pagination: {
      totalCount: 598626,
      maxPage: 232318,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |