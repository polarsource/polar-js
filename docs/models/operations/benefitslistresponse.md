# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-02-06T15:06:10.493Z"),
        modifiedAt: new Date("2022-05-08T08:34:30.142Z"),
        id: "<value>",
        description: "Focused real-time protocol",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 411820,
            timeframe: "month",
          },
          activations: {
            limit: 675439,
            enableUserAdmin: false,
          },
          limitUsage: 881104,
        },
      },
    ],
    pagination: {
      totalCount: 249796,
      maxPage: 581273,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |