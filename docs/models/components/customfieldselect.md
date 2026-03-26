# CustomFieldSelect

Schema for a custom field of type select.

## Example Usage

```typescript
import { CustomFieldSelect } from "@polar-sh/sdk/models/components/customfieldselect.js";

let value: CustomFieldSelect = {
  createdAt: new Date("2025-07-07T06:15:52.159Z"),
  modifiedAt: new Date("2025-11-24T13:34:12.101Z"),
  id: "<value>",
  metadata: {
    "key": 1484.44,
  },
  type: "select",
  slug: "<value>",
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  properties: {
    options: [],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Creation timestamp of the object.                                                                |                                                                                                  |
| `modifiedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Last modification timestamp of the object.                                                       |                                                                                                  |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the object.                                                                            |                                                                                                  |
| `metadata`                                                                                       | Record<string, *components.MetadataOutputType*>                                                  | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `type`                                                                                           | *"select"*                                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `slug`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Identifier of the custom field. It'll be used as key when storing the value.                     |                                                                                                  |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Name of the custom field.                                                                        |                                                                                                  |
| `organizationId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the organization owning the custom field.                                              | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                             |
| `properties`                                                                                     | [components.CustomFieldSelectProperties](../../models/components/customfieldselectproperties.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |