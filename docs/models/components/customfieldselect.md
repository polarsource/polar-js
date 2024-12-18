# CustomFieldSelect

Schema for a custom field of type select.

## Example Usage

```typescript
import { CustomFieldSelect } from "@polar-sh/sdk/models/components";

let value: CustomFieldSelect = {
  createdAt: new Date("2023-11-05T10:52:46.701Z"),
  modifiedAt: new Date("2022-02-06T05:59:38.595Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
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
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Creation timestamp of the object.                                                                |
| `modifiedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Last modification timestamp of the object.                                                       |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the object.                                                                            |
| `metadata`                                                                                       | Record<string, *components.CustomFieldSelectMetadata*>                                           | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [components.CustomFieldSelectType](../../models/components/customfieldselecttype.md)             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `slug`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Identifier of the custom field. It'll be used as key when storing the value.                     |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Name of the custom field.                                                                        |
| `organizationId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the organization owning the custom field.                                              |
| `properties`                                                                                     | [components.CustomFieldSelectProperties](../../models/components/customfieldselectproperties.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |