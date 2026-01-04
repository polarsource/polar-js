# AttachedCustomField

Schema of a custom field attached to a resource.

## Example Usage

```typescript
import { AttachedCustomField } from "@polar-sh/sdk/models/components/attachedcustomfield.js";

let value: AttachedCustomField = {
  customFieldId: "<value>",
  customField: {
    createdAt: new Date("2025-10-12T09:35:12.807Z"),
    modifiedAt: new Date("2026-02-09T05:41:16.244Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    type: "checkbox",
    slug: "<value>",
    name: "<value>",
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    properties: {},
  },
  order: 193851,
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