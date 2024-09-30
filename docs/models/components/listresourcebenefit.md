# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefit = {
  items: [
    {
      createdAt: new Date("2023-09-08T22:05:58.754Z"),
      modifiedAt: new Date("2024-02-19T21:52:41.487Z"),
      id: "<value>",
      description:
        "fully daintily aside whenever edge meanwhile radiant whenever",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        repositoryId: "<value>",
        repositoryOwner: "polarsource",
        repositoryName: "private_repo",
        permission: "maintain",
      },
    },
  ],
  pagination: {
    totalCount: 913579,
    maxPage: 728960,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |