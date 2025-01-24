# AttachedCustomField

Schema of a custom field attached to a resource.

## Example Usage

```typescript
import { AttachedCustomField } from "@polar-sh/sdk/models/components";

let value: AttachedCustomField = {
  customFieldId: "<value>",
  customField: {
    createdAt: new Date("2023-03-12T02:16:45.552Z"),
    modifiedAt: new Date("2024-06-16T05:56:53.820Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    slug: "<value>",
    name: "<value>",
    organizationId: "<value>",
    properties: {},
  },
  order: 876506,
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