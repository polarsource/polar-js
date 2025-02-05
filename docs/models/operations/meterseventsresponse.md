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
        timestamp: new Date("2024-04-25T23:55:35.873Z"),
        name: "<value>",
        source: "system",
        organizationId: "<value>",
        customerId: "<value>",
        externalCustomerId: "<id>",
      },
    ],
    pagination: {
      totalCount: 423,
      maxPage: 785188,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |