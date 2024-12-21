# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-12-15T03:43:32.459Z"),
        modifiedAt: new Date("2023-08-28T11:33:48.812Z"),
        id: "<value>",
        description:
          "savour cap wisecrack zealous warming accurate jubilant trust pish",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          repositoryOwner: "polarsource",
          repositoryName: "private_repo",
          permission: "admin",
        },
      },
    ],
    pagination: {
      totalCount: 916878,
      maxPage: 913945,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |