# ListResourceCustomField

## Example Usage

```typescript
import { ListResourceCustomField } from "@polar-sh/sdk/models/components/listresourcecustomfield.js";

let value: ListResourceCustomField = {
  items: [
    {
      createdAt: new Date("2023-07-18T08:10:20.804Z"),
      modifiedAt: new Date("2023-04-01T07:16:45.965Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      slug: "<value>",
      name: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      properties: {
        options: [
          {
            value: "<value>",
            label: "<value>",
          },
        ],
      },
    },
  ],
  pagination: {
    totalCount: 83454,
    maxPage: 568720,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomField*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |