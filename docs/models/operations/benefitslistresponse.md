# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations/benefitslist.js";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-02-19T01:11:58.352Z"),
        modifiedAt: new Date("2025-07-23T17:59:18.862Z"),
        id: "<value>",
        description:
          "excluding reproachfully slump mmm indeed requirement unwieldy mmm till",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 232193,
            timeframe: "year",
          },
          activations: {
            limit: 48324,
            enableCustomerAdmin: false,
          },
          limitUsage: 283012,
        },
      },
    ],
    pagination: {
      totalCount: 336707,
      maxPage: 280695,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |