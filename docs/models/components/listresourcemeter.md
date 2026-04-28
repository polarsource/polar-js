# ListResourceMeter

## Example Usage

```typescript
import { ListResourceMeter } from "@polar-sh/sdk/models/components/listresourcemeter.js";

let value: ListResourceMeter = {
  items: [
    {
      metadata: {},
      createdAt: new Date("2024-01-09T16:18:53.335Z"),
      modifiedAt: new Date("2024-09-05T03:20:48.650Z"),
      id: "<value>",
      name: "<value>",
      unit: "token",
      filter: {
        conjunction: "or",
        clauses: [
          {
            property: "<value>",
            operator: "lt",
            value: false,
          },
        ],
      },
      aggregation: {
        func: "unique",
        property: "<value>",
      },
      organizationId: "<value>",
    },
  ],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Meter](../../models/components/meter.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |