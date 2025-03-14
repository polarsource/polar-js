# ListResourceCustomField

## Example Usage

```typescript
import { ListResourceCustomField } from "@polar-sh/sdk/models/components/listresourcecustomfield.js";

let value: ListResourceCustomField = {
  items: [
    {
      createdAt: new Date("2023-03-07T03:43:14.669Z"),
      modifiedAt: new Date("2023-07-31T09:26:01.957Z"),
      id: "<value>",
      metadata: {
        "key": 618082,
      },
      slug: "<value>",
      name: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      properties: {},
    },
  ],
  pagination: {
    totalCount: 180967,
    maxPage: 82393,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomField*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |