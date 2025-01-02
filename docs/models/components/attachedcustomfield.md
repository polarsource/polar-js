# AttachedCustomField

Schema of a custom field attached to a resource.

## Example Usage

```typescript
import { AttachedCustomField } from "@polar-sh/sdk/models/components";

let value: AttachedCustomField = {
  customFieldId: "<value>",
  customField: {
    createdAt: new Date("2025-02-05T18:51:30.654Z"),
    modifiedAt: new Date("2023-12-26T04:21:26.793Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    slug: "<value>",
    name: "<value>",
    organizationId: "<value>",
    properties: {
      options: [
        {
          value: "<value>",
          label: "<value>",
        },
      ],
    },
  },
  order: 636061,
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