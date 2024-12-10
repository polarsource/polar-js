# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefit = {
  items: [
    {
      createdAt: new Date("2024-06-21T06:46:17.409Z"),
      modifiedAt: new Date("2022-07-24T13:22:51.932Z"),
      id: "<value>",
      description: "vein dress unhappy rewrite",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        repositoryId: "<value>",
        repositoryOwner: "polarsource",
        repositoryName: "private_repo",
        permission: "pull",
      },
    },
  ],
  pagination: {
    totalCount: 408093,
    maxPage: 2726,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |