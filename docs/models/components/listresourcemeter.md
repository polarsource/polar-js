# ListResourceMeter

## Example Usage

```typescript
import { ListResourceMeter } from "@polar-sh/sdk/models/components/listresourcemeter.js";

let value: ListResourceMeter = {
  items: [
    {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2023-12-11T01:36:24.954Z"),
      modifiedAt: new Date("2023-01-09T16:18:53.335Z"),
      id: "<value>",
      name: "<value>",
      filter: {
        conjunction: "or",
        clauses: [],
      },
      aggregation: {},
      organizationId: "<value>",
    },
  ],
  pagination: {
    totalCount: 386895,
    maxPage: 909416,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Meter](../../models/components/meter.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |