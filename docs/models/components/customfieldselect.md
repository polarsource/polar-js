# CustomFieldSelect

Schema for a custom field of type select.

## Example Usage

```typescript
import { CustomFieldSelect } from "@polar-sh/sdk/models/components/customfieldselect.js";

let value: CustomFieldSelect = {
  createdAt: new Date("2025-11-21T04:42:37.776Z"),
  modifiedAt: new Date("2023-01-19T11:47:32.986Z"),
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
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Creation timestamp of the object.                                                                |                                                                                                  |
| `modifiedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Last modification timestamp of the object.                                                       |                                                                                                  |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the object.                                                                            |                                                                                                  |
| `metadata`                                                                                       | Record<string, *components.CustomFieldSelectMetadata*>                                           | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `type`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `slug`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Identifier of the custom field. It'll be used as key when storing the value.                     |                                                                                                  |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Name of the custom field.                                                                        |                                                                                                  |
| `organizationId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the organization owning the custom field.                                              | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                             |
| `properties`                                                                                     | [components.CustomFieldSelectProperties](../../models/components/customfieldselectproperties.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |