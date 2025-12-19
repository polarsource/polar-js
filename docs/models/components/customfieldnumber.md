# CustomFieldNumber

Schema for a custom field of type number.

## Example Usage

```typescript
import { CustomFieldNumber } from "@polar-sh/sdk/models/components/customfieldnumber.js";

let value: CustomFieldNumber = {
  createdAt: new Date("2024-09-14T18:42:51.369Z"),
  modifiedAt: new Date("2023-10-22T02:25:47.805Z"),
  id: "<value>",
  metadata: {
    "key": 64532,
  },
  type: "number",
  slug: "<value>",
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  properties: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Creation timestamp of the object.                                                                |                                                                                                  |
| `modifiedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Last modification timestamp of the object.                                                       |                                                                                                  |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the object.                                                                            |                                                                                                  |
| `metadata`                                                                                       | Record<string, *components.MetadataOutputType*>                                                  | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `type`                                                                                           | *"number"*                                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `slug`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Identifier of the custom field. It'll be used as key when storing the value.                     |                                                                                                  |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Name of the custom field.                                                                        |                                                                                                  |
| `organizationId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the organization owning the custom field.                                              | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                             |
| `properties`                                                                                     | [components.CustomFieldNumberProperties](../../models/components/customfieldnumberproperties.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |