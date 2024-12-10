# ListResourceCustomField

## Example Usage

```typescript
import { ListResourceCustomField } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomField = {
  items: [
    {
      createdAt: new Date("2022-03-13T21:30:50.627Z"),
      modifiedAt: new Date("2022-04-11T23:02:43.476Z"),
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
    totalCount: 276720,
    maxPage: 677488,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomField*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |