# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations/benefitslist.js";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2023-08-14T03:00:20.952Z"),
        modifiedAt: new Date("2024-02-14T01:05:18.036Z"),
        description: "until noisily always mispronounce married",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        metadata: {
          "key": false,
        },
        properties: {
          guildId: "<id>",
          roleId: "<id>",
          guildToken: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 938985,
      maxPage: 695126,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |