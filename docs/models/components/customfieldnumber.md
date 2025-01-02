# CustomFieldNumber

Schema for a custom field of type number.

## Example Usage

```typescript
import { CustomFieldNumber } from "@polar-sh/sdk/models/components";

let value: CustomFieldNumber = {
  createdAt: new Date("2024-01-25T11:37:19.885Z"),
  modifiedAt: new Date("2024-01-26T22:49:04.962Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
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
| `type`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `slug`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Identifier of the custom field. It'll be used as key when storing the value.                     |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Name of the custom field.                                                                        |
| `organizationId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the organization owning the custom field.                                              |
| `properties`                                                                                     | [components.CustomFieldNumberProperties](../../models/components/customfieldnumberproperties.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |