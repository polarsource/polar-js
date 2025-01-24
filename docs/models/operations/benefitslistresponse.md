# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations/benefitslist.js";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-07-28T20:15:39.685Z"),
        modifiedAt: new Date("2024-05-18T12:53:51.974Z"),
        id: "<value>",
        description:
          "faint ferociously beyond qua surprisingly provided whenever",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          guildId: "<id>",
          roleId: "<id>",
          guildToken: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 840462,
      maxPage: 420339,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |