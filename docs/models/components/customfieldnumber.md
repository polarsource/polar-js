# CustomFieldNumber

Schema for a custom field of type number.

## Example Usage

```typescript
import { CustomFieldNumber } from "@polar-sh/sdk/models/components";

let value: CustomFieldNumber = {
  createdAt: new Date("2024-07-29T01:03:47.705Z"),
  modifiedAt: new Date("2022-10-30T14:33:13.182Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  slug: "<value>",
  name: "<value>",
  organizationId: "<value>",
  properties: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Creation timestamp of the object.                                                                |
| `modifiedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Last modification timestamp of the object.                                                       |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the object.                                                                            |
| `metadata`                                                                                       | Record<string, *components.CustomFieldNumberMetadata*>                                           | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [components.CustomFieldNumberType](../../models/components/customfieldnumbertype.md)             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `slug`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Identifier of the custom field. It'll be used as key when storing the value.                     |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Name of the custom field.                                                                        |
| `organizationId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the organization owning the custom field.                                              |
| `properties`                                                                                     | [components.CustomFieldNumberProperties](../../models/components/customfieldnumberproperties.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |