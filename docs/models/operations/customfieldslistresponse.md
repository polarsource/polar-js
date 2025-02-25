# CustomFieldsListResponse

## Example Usage

```typescript
import { CustomFieldsListResponse } from "@polar-sh/sdk/models/operations/customfieldslist.js";

let value: CustomFieldsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-12-18T08:36:34.657Z"),
        modifiedAt: new Date("2025-07-22T03:53:22.451Z"),
        id: "<value>",
        metadata: {
          "key": 15071,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {},
      },
    ],
    pagination: {
      totalCount: 954586,
      maxPage: 125912,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.ListResourceCustomField](../../models/components/listresourcecustomfield.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |