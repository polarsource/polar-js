# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations/benefitslist.js";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-12-28T10:29:46.261Z"),
        modifiedAt: new Date("2024-01-19T16:40:09.743Z"),
        id: "<value>",
        description: "westernise whoa wildly deselect assist lounge oof revere",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 135278,
            timeframe: "month",
          },
          activations: {
            limit: 695652,
            enableCustomerAdmin: false,
          },
          limitUsage: 632888,
        },
      },
    ],
    pagination: {
      totalCount: 84036,
      maxPage: 336437,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |