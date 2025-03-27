# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations/benefitslist.js";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-11-04T22:28:05.369Z"),
        modifiedAt: new Date("2025-08-08T16:43:50.985Z"),
        id: "<value>",
        description:
          "surprisingly as under overcooked save importance glider concerned",
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
      totalCount: 837785,
      maxPage: 18923,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |