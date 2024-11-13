# CustomFieldsListResponse

## Example Usage

```typescript
import { CustomFieldsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomFieldsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-09-30T06:35:01.392Z"),
        modifiedAt: new Date("2022-10-31T08:48:47.117Z"),
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
      totalCount: 463044,
      maxPage: 916051,
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `result`                                                           | [components.ListResource](../../models/components/listresource.md) | :heavy_check_mark:                                                 | N/A                                                                |