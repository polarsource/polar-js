# CustomFieldDate

Schema for a custom field of type date.

## Example Usage

```typescript
import { CustomFieldDate } from "@polar-sh/sdk/models/components";

let value: CustomFieldDate = {
  createdAt: new Date("2023-05-10T22:42:04.682Z"),
  modifiedAt: new Date("2023-02-16T15:35:40.674Z"),
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | Creation timestamp of the object.                                                                                    |
| `modifiedAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | Last modification timestamp of the object.                                                                           |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the object.                                                                                                |
| `metadata`                                                                                                           | Record<string, *string*>                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [components.CustomFieldDateType](../../models/components/customfielddatetype.md)                                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `slug`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization. |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Name of the custom field.                                                                                            |
| `organizationId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the organization owning the custom field.                                                                  |
| `properties`                                                                                                         | [components.CustomFieldDateProperties](../../models/components/customfielddateproperties.md)                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |