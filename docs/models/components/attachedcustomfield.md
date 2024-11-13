# AttachedCustomField

Schema of a custom field attached to a resource.

## Example Usage

```typescript
import { AttachedCustomField } from "@polar-sh/sdk/models/components";

let value: AttachedCustomField = {
  customFieldId: "<value>",
  customField: {
    createdAt: new Date("2023-10-31T04:19:03.850Z"),
    modifiedAt: new Date("2024-01-14T05:30:11.757Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    slug: "<value>",
    name: "<value>",
    organizationId: "<value>",
    properties: {},
  },
  order: 756641,
  required: false,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `customFieldId`                                      | *string*                                             | :heavy_check_mark:                                   | ID of the custom field.                              |
| `customField`                                        | *components.CustomField*                             | :heavy_check_mark:                                   | N/A                                                  |
| `order`                                              | *number*                                             | :heavy_check_mark:                                   | Order of the custom field in the resource.           |
| `required`                                           | *boolean*                                            | :heavy_check_mark:                                   | Whether the value is required for this custom field. |