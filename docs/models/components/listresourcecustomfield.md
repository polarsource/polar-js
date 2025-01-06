# ListResourceCustomField

## Example Usage

```typescript
import { ListResourceCustomField } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomField = {
  items: [
    {
      createdAt: new Date("2024-03-10T20:41:59.793Z"),
      modifiedAt: new Date("2025-03-17T00:47:08.664Z"),
      id: "<value>",
      metadata: {
        "key": 306,
      },
      slug: "<value>",
      name: "<value>",
      organizationId: "<value>",
      properties: {},
    },
  ],
  pagination: {
    totalCount: 16877,
    maxPage: 839715,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomField*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |