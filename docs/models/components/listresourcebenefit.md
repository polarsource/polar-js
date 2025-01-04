# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefit = {
  items: [
    {
      createdAt: new Date("2023-11-25T02:16:52.879Z"),
      modifiedAt: new Date("2024-05-29T01:41:52.063Z"),
      id: "<value>",
      description: "colligate uh-huh drat capsize",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {},
    },
  ],
  pagination: {
    totalCount: 311484,
    maxPage: 686946,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |