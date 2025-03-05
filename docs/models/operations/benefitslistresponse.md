# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations/benefitslist.js";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-10-31T21:20:06.190Z"),
        modifiedAt: new Date("2023-02-21T08:10:22.238Z"),
        id: "<value>",
        description:
          "slather loosely hm if hypothesise recommendation if engage",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          archived: {
            "key": false,
          },
          files: [
            "<value>",
          ],
        },
      },
    ],
    pagination: {
      totalCount: 232549,
      maxPage: 867468,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |