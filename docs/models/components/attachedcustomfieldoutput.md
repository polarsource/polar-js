# AttachedCustomFieldOutput

Schema of a custom field attached to a resource.

## Example Usage

```typescript
import { AttachedCustomFieldOutput } from "@polar-sh/sdk/models/components/attachedcustomfieldoutput.js";

let value: AttachedCustomFieldOutput = {
  customFieldId: "<value>",
  customField: {
    createdAt: new Date("2023-07-10T09:22:41.237Z"),
    modifiedAt: new Date("2025-01-18T22:14:04.705Z"),
    id: "<value>",
    metadata: {},
    type: "select",
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
  order: 992200,
  required: true,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `customFieldId`                                      | *string*                                             | :heavy_check_mark:                                   | ID of the custom field.                              |
| `customField`                                        | *components.CustomField*                             | :heavy_check_mark:                                   | N/A                                                  |
| `order`                                              | *number*                                             | :heavy_check_mark:                                   | Order of the custom field in the resource.           |
| `required`                                           | *boolean*                                            | :heavy_check_mark:                                   | Whether the value is required for this custom field. |