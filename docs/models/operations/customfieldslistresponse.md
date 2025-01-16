# CustomFieldsListResponse

## Example Usage

```typescript
import { CustomFieldsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomFieldsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-08-22T15:41:23.211Z"),
        modifiedAt: new Date("2024-10-13T17:33:07.782Z"),
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
      totalCount: 114719,
      maxPage: 554974,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.ListResourceCustomField](../../models/components/listresourcecustomfield.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |