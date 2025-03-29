# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations/benefitslist.js";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-01-04T17:38:06.749Z"),
        modifiedAt: new Date("2023-02-22T10:37:19.141Z"),
        id: "<value>",
        description: "exonerate slap opposite seafood",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          note: "<value>",
        },
        isTaxApplicable: false,
      },
    ],
    pagination: {
      totalCount: 852353,
      maxPage: 591309,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |