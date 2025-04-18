# MetersListResponse

## Example Usage

```typescript
import { MetersListResponse } from "@polar-sh/sdk/models/operations/meterslist.js";

let value: MetersListResponse = {
  result: {
    items: [
      {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2025-04-21T05:25:19.258Z"),
        modifiedAt: new Date("2023-01-31T09:16:39.900Z"),
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
    ],
    pagination: {
      totalCount: 255858,
      maxPage: 729316,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceMeter](../../models/components/listresourcemeter.md) | :heavy_check_mark:                                                           | N/A                                                                          |