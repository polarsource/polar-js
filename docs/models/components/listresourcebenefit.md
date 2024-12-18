# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefit = {
  items: [
    {
      createdAt: new Date("2023-09-16T09:06:29.012Z"),
      modifiedAt: new Date("2024-01-28T04:45:11.023Z"),
      id: "<value>",
      description:
        "cumbersome drag battle briskly nor tame bravely fill essence",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        archived: {
          "key": false,
        },
        files: [
          "<value>",
        ],
      },
    },
  ],
  pagination: {
    totalCount: 355674,
    maxPage: 805165,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |