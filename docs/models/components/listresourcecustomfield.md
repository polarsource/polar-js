# ListResourceCustomField

## Example Usage

```typescript
import { ListResourceCustomField } from "@polar-sh/sdk/models/components/listresourcecustomfield.js";

let value: ListResourceCustomField = {
  items: [
    {
      createdAt: new Date("2023-08-05T17:54:32.565Z"),
      modifiedAt: new Date("2024-07-20T20:59:47.090Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      slug: "<value>",
      name: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      properties: {},
    },
  ],
  pagination: {
    totalCount: 610598,
    maxPage: 12254,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomField*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |