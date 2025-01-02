# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefit = {
  items: [
    {
      createdAt: new Date("2025-11-24T23:28:20.095Z"),
      modifiedAt: new Date("2024-02-29T02:47:26.443Z"),
      id: "<value>",
      description: "fill essence coincide",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {},
    },
  ],
  pagination: {
    totalCount: 479035,
    maxPage: 480043,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |