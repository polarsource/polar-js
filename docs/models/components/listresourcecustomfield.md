# ListResourceCustomField

## Example Usage

```typescript
import { ListResourceCustomField } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomField = {
  items: [
    {
      createdAt: new Date("2024-04-18T15:52:30.847Z"),
      modifiedAt: new Date("2022-09-24T10:58:44.754Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      slug: "<value>",
      name: "<value>",
      organizationId: "<value>",
      properties: {},
    },
  ],
  pagination: {
    totalCount: 427683,
    maxPage: 442160,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomField*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |