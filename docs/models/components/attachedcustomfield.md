# AttachedCustomField

Schema of a custom field attached to a resource.

## Example Usage

```typescript
import { AttachedCustomField } from "@polar-sh/sdk/models/components/attachedcustomfield.js";

let value: AttachedCustomField = {
  customFieldId: "<value>",
  customField: {
    createdAt: new Date("2025-10-22T16:07:37.337Z"),
    modifiedAt: new Date("2025-12-13T20:02:37.956Z"),
    id: "<value>",
    metadata: {
      "key": 380335,
    },
    slug: "<value>",
    name: "<value>",
    organizationId: "<value>",
    properties: {},
  },
  order: 147808,
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