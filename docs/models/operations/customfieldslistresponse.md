# CustomFieldsListResponse

## Example Usage

```typescript
import { CustomFieldsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomFieldsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-04-28T02:56:38.727Z"),
        modifiedAt: new Date("2025-07-26T10:07:31.317Z"),
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
      totalCount: 532711,
      maxPage: 206437,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.ListResourceCustomField](../../models/components/listresourcecustomfield.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |