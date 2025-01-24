# CustomFieldsListResponse

## Example Usage

```typescript
import { CustomFieldsListResponse } from "@polar-sh/sdk/models/operations/customfieldslist.js";

let value: CustomFieldsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-01-30T08:56:13.071Z"),
        modifiedAt: new Date("2025-10-31T21:20:06.190Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {},
      },
    ],
    pagination: {
      totalCount: 645688,
      maxPage: 641713,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.ListResourceCustomField](../../models/components/listresourcecustomfield.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |