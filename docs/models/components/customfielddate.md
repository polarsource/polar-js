# CustomFieldDate

Schema for a custom field of type date.

## Example Usage

```typescript
import { CustomFieldDate } from "@polar-sh/sdk/models/components/customfielddate.js";

let value: CustomFieldDate = {
  createdAt: new Date("2023-02-13T09:39:00.718Z"),
  modifiedAt: new Date("2024-10-12T01:37:53.162Z"),
  id: "<value>",
  metadata: {
    "key": true,
  },
  type: "date",
  slug: "<value>",
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  properties: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |                                                                                               |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |                                                                                               |
| `metadata`                                                                                    | Record<string, *components.CustomFieldDateMetadata*>                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `slug`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the custom field. It'll be used as key when storing the value.                  |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the custom field.                                                                     |                                                                                               |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the custom field.                                           | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                          |
| `properties`                                                                                  | [components.CustomFieldDateProperties](../../models/components/customfielddateproperties.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |