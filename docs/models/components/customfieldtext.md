# CustomFieldText

Schema for a custom field of type text.

## Example Usage

```typescript
import { CustomFieldText } from "@polar-sh/sdk/models/components/customfieldtext.js";

let value: CustomFieldText = {
  createdAt: new Date("2024-03-18T13:21:51.302Z"),
  modifiedAt: new Date("2024-03-14T04:39:30.711Z"),
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `metadata`                                                                                    | Record<string, *components.CustomFieldTextMetadata*>                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `slug`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the custom field. It'll be used as key when storing the value.                  |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the custom field.                                                                     |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the custom field.                                           |
| `properties`                                                                                  | [components.CustomFieldTextProperties](../../models/components/customfieldtextproperties.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |