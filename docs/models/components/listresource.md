# ListResource

## Example Usage

```typescript
import { ListResource } from "@polar-sh/sdk/models/components";

let value: ListResource = {
  items: [
    {
      createdAt: new Date("2022-12-11T12:45:41.520Z"),
      modifiedAt: new Date("2023-01-20T02:46:22.982Z"),
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
    totalCount: 493438,
    maxPage: 706735,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomField*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |