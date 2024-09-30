# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-01-03T06:18:29.426Z"),
        modifiedAt: new Date("2022-08-07T00:09:49.489Z"),
        id: "<value>",
        description:
          "scratch dulcimer before when excluding worthless up transcend since while",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          repositoryId: "<value>",
          repositoryOwner: "polarsource",
          repositoryName: "private_repo",
          permission: "admin",
        },
      },
    ],
    pagination: {
      totalCount: 653000,
      maxPage: 344289,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |