# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefit = {
  items: [
    {
      createdAt: new Date("2022-10-22T21:26:13.900Z"),
      modifiedAt: new Date("2022-07-28T00:35:58.416Z"),
      id: "<value>",
      description: "yippee carefully shadowy lobster including",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {},
    },
  ],
  pagination: {
    totalCount: 346632,
    maxPage: 199238,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |