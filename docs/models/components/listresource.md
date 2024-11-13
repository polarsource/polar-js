# ListResource

## Example Usage

```typescript
import { ListResource } from "@polar-sh/sdk/models/components";

let value: ListResource = {
  items: [
    {
      createdAt: new Date("2023-01-20T02:46:22.982Z"),
      modifiedAt: new Date("2023-06-25T19:23:05.706Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      slug: "<value>",
      name: "<value>",
      organizationId: "<value>",
      properties: {},
    },
  ],
  pagination: {
    totalCount: 999978,
    maxPage: 518571,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomField*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |