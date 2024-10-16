# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefit = {
  items: [
    {
      createdAt: new Date("2022-11-02T05:56:05.835Z"),
      modifiedAt: new Date("2022-11-12T16:15:27.788Z"),
      id: "<value>",
      description:
        "idealistic equally service amidst vainly meh our courteous mid",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {},
    },
  ],
  pagination: {
    totalCount: 854650,
    maxPage: 418232,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |