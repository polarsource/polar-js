# UsersBenefitsListResponse

## Example Usage

```typescript
import { UsersBenefitsListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersBenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-08-21T04:36:26.084Z"),
        modifiedAt: new Date("2023-04-10T07:48:57.030Z"),
        id: "<value>",
        description:
          "oddball pish amongst midst furlough continually fooey amid",
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
      totalCount: 656330,
      maxPage: 138183,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.ListResourceUserBenefit](../../models/components/listresourceuserbenefit.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |