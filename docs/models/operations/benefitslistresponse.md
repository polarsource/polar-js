# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-05-02T03:10:42.322Z"),
        modifiedAt: new Date("2023-11-23T09:23:59.598Z"),
        id: "<value>",
        description:
          "wetly scratch dulcimer before when excluding worthless up transcend since",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 668218,
            timeframe: "year",
          },
          activations: {
            limit: 19462,
            enableUserAdmin: false,
          },
          limitUsage: 399222,
        },
      },
    ],
    pagination: {
      totalCount: 308528,
      maxPage: 942185,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |