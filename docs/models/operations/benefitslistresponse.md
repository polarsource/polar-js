# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations/benefitslist.js";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-05-01T12:37:32.096Z"),
        modifiedAt: new Date("2024-07-08T00:24:34.770Z"),
        id: "<value>",
        description: "collaborate pfft nor",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {},
      },
    ],
    pagination: {
      totalCount: 262400,
      maxPage: 558907,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |