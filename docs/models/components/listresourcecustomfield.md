# ListResourceCustomField

## Example Usage

```typescript
import { ListResourceCustomField } from "@polar-sh/sdk/models/components/listresourcecustomfield.js";

let value: ListResourceCustomField = {
  items: [
    {
      createdAt: new Date("2023-05-13T14:55:52.669Z"),
      modifiedAt: new Date("2024-06-24T01:49:54.302Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      type: "select",
      slug: "<value>",
      name: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      properties: {
        options: [],
      },
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
| `items`                                                        | *components.CustomField*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |