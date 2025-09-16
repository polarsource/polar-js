# ListResourceMeter

## Example Usage

```typescript
import { ListResourceMeter } from "@polar-sh/sdk/models/components/listresourcemeter.js";

let value: ListResourceMeter = {
  items: [
    {
      metadata: {},
      createdAt: new Date("2023-01-09T16:18:53.335Z"),
      modifiedAt: new Date("2023-09-06T03:20:48.650Z"),
      id: "<value>",
      name: "<value>",
      filter: {
        conjunction: "or",
        clauses: [],
      },
      aggregation: {
        func: "min",
        property: "<value>",
      },
      organizationId: "<value>",
    },
  ],
  pagination: {
    totalCount: 607201,
    maxPage: 808600,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Meter](../../models/components/meter.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |