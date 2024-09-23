# UsersBenefitsListResponse

## Example Usage

```typescript
import { UsersBenefitsListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersBenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-04-25T14:17:38.418Z"),
        modifiedAt: new Date("2024-09-04T09:11:49.246Z"),
        id: "<value>",
        description: "Versatile exuding project",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          activeFiles: [
            "<value>",
          ],
        },
      },
    ],
    pagination: {
      totalCount: 528895,
      maxPage: 568045,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.ListResourceUserBenefit](../../models/components/listresourceuserbenefit.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |