# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations/benefitslist.js";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-05-14T06:49:56.913Z"),
        modifiedAt: new Date("2023-04-27T09:03:53.602Z"),
        id: "<value>",
        description:
          "throughout innocently er wilt punctually sudden affectionate among honored",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          imageHeight: 400,
          imageWidth: 400,
        },
      },
    ],
    pagination: {
      totalCount: 674166,
      maxPage: 693648,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |