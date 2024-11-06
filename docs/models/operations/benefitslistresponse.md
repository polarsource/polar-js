# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-04-20T20:32:25.216Z"),
        modifiedAt: new Date("2024-08-08T08:34:51.248Z"),
        id: "<value>",
        description: "while unless after vainly scoop",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 527715,
            timeframe: "year",
          },
          activations: {
            limit: 271306,
            enableUserAdmin: false,
          },
          limitUsage: 258059,
        },
      },
    ],
    pagination: {
      totalCount: 532320,
      maxPage: 703189,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |