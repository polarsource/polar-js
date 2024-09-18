# ListResourceUserBenefit

## Example Usage

```typescript
import { ListResourceUserBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceUserBenefit = {
  items: [
    {
      createdAt: new Date("2022-09-10T21:26:47.593Z"),
      modifiedAt: new Date("2022-01-13T20:07:37.920Z"),
      id: "<value>",
      description: "Right-sized executive throughput",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        repositoryOwner: "polarsource",
        repositoryName: "private_repo",
      },
    },
  ],
  pagination: {
    totalCount: 729991,
    maxPage: 749999,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.UserBenefit*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |