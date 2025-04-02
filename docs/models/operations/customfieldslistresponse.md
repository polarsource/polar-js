# CustomFieldsListResponse

## Example Usage

```typescript
import { CustomFieldsListResponse } from "@polar-sh/sdk/models/operations/customfieldslist.js";

let value: CustomFieldsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-10-08T03:04:14.470Z"),
        modifiedAt: new Date("2023-07-02T21:45:22.906Z"),
        id: "<value>",
        metadata: {
          "key": 572835,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        properties: {},
      },
    ],
    pagination: {
      totalCount: 58395,
      maxPage: 631018,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.ListResourceCustomField](../../models/components/listresourcecustomfield.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |