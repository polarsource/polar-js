# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations/benefitslist.js";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-03-16T12:07:26.131Z"),
        modifiedAt: new Date("2024-07-30T00:04:24.406Z"),
        id: "<value>",
        description:
          "bashfully marvelous regarding singing obediently swim meanwhile zesty",
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
      totalCount: 716292,
      maxPage: 611761,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |