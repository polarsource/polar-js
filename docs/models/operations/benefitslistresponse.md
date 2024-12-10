# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-05-20T10:14:59.264Z"),
        modifiedAt: new Date("2022-06-27T17:11:48.345Z"),
        id: "<value>",
        description: "pro yowza supposing jazz",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          repositoryId: "<value>",
          repositoryOwner: "polarsource",
          repositoryName: "private_repo",
          permission: "triage",
        },
      },
    ],
    pagination: {
      totalCount: 236544,
      maxPage: 223296,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |