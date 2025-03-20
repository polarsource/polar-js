# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components/listresourcebenefit.js";

let value: ListResourceBenefit = {
  items: [
    {
      createdAt: new Date("2025-04-20T12:14:23.341Z"),
      modifiedAt: new Date("2024-08-12T07:20:45.675Z"),
      id: "<value>",
      description: "plus roughly hmph when gah airline given whisper maestro",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        note: "<value>",
      },
      isTaxApplicable: false,
    },
  ],
  pagination: {
    totalCount: 777154,
    maxPage: 318150,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |