# BenefitsListResponse

## Example Usage

```typescript
import { BenefitsListResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-12-28T02:31:12.899Z"),
        modifiedAt: new Date("2022-09-27T16:26:45.665Z"),
        id: "<value>",
        description: "Programmable incremental hardware",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {},
      },
    ],
    pagination: {
      totalCount: 554688,
      maxPage: 287051,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceBenefit](../../models/components/listresourcebenefit.md) | :heavy_check_mark:                                                               | N/A                                                                              |