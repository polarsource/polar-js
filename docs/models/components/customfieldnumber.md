# CustomFieldNumber

Schema for a custom field of type number.

## Example Usage

```typescript
import { CustomFieldNumber } from "@polar-sh/sdk/models/components";

let value: CustomFieldNumber = {
  createdAt: new Date("2024-06-13T22:41:28.103Z"),
  modifiedAt: new Date("2024-07-22T19:36:51.710Z"),
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
| `type`                                                                                                               | [components.CustomFieldNumberType](../../models/components/customfieldnumbertype.md)                                 | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `slug`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization. |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Name of the custom field.                                                                                            |
| `organizationId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the organization owning the custom field.                                                                  |
| `properties`                                                                                                         | [components.CustomFieldNumberProperties](../../models/components/customfieldnumberproperties.md)                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |