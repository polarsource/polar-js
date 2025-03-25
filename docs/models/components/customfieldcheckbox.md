# CustomFieldCheckbox

Schema for a custom field of type checkbox.

## Example Usage

```typescript
import { CustomFieldCheckbox } from "@polar-sh/sdk/models/components/customfieldcheckbox.js";

let value: CustomFieldCheckbox = {
  createdAt: new Date("2025-09-02T05:07:56.421Z"),
  modifiedAt: new Date("2025-04-17T23:02:17.425Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  slug: "<value>",
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  properties: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |                                                                                                      |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |                                                                                                      |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the object.                                                                                |                                                                                                      |
| `metadata`                                                                                           | Record<string, *components.CustomFieldCheckboxMetadata*>                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `type`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `slug`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Identifier of the custom field. It'll be used as key when storing the value.                         |                                                                                                      |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Name of the custom field.                                                                            |                                                                                                      |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the organization owning the custom field.                                                  | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                 |
| `properties`                                                                                         | [components.CustomFieldCheckboxProperties](../../models/components/customfieldcheckboxproperties.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |