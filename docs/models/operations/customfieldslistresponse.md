# CustomFieldsListResponse

## Example Usage

```typescript
import { CustomFieldsListResponse } from "@polar-sh/sdk/models/operations/customfieldslist.js";

let value: CustomFieldsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-11-02T08:28:39.301Z"),
        modifiedAt: new Date("2024-07-19T07:06:39.603Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        properties: {
          options: [
            {
              value: "<value>",
              label: "<value>",
            },
          ],
        },
      },
    ],
    pagination: {
      totalCount: 429332,
      maxPage: 791063,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.ListResourceCustomField](../../models/components/listresourcecustomfield.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |