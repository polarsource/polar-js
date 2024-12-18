# CustomFieldsListResponse

## Example Usage

```typescript
import { CustomFieldsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomFieldsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-12-24T05:36:28.539Z"),
        modifiedAt: new Date("2023-08-22T02:59:30.434Z"),
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
      totalCount: 642514,
      maxPage: 729191,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.ListResourceCustomField](../../models/components/listresourcecustomfield.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |