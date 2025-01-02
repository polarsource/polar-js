# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-02-01T21:53:59.428Z"),
        modifiedAt: new Date("2023-04-20T02:33:09.911Z"),
        id: "<value>",
        description: "except furthermore stranger than",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 745815,
            timeframe: "day",
          },
          activations: {
            limit: 220474,
            enableCustomerAdmin: false,
          },
          limitUsage: 361381,
        },
      },
    ],
    pagination: {
      totalCount: 552589,
      maxPage: 336087,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |