# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefit = {
  items: [
    {
      createdAt: new Date("2024-01-18T10:35:41.703Z"),
      modifiedAt: new Date("2023-09-08T22:05:58.754Z"),
      id: "<value>",
      description:
        "harmful baptise pear instead nervously oof sentimental furthermore",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 773225,
          timeframe: "day",
        },
        activations: {
          limit: 913579,
          enableUserAdmin: false,
        },
        limitUsage: 728960,
      },
    },
  ],
  pagination: {
    totalCount: 107145,
    maxPage: 664995,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |