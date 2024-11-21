# CustomFieldDate

Schema for a custom field of type date.

## Example Usage

```typescript
import { CustomFieldDate } from "@polar-sh/sdk/models/components";

let value: CustomFieldDate = {
  createdAt: new Date("2023-05-06T06:53:25.696Z"),
  modifiedAt: new Date("2024-02-27T21:52:23.922Z"),
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
| `metadata`                                                                                    | Record<string, *components.CustomFieldDateMetadata*>                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.CustomFieldDateType](../../models/components/customfielddatetype.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `slug`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the custom field. It'll be used as key when storing the value.                  |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the custom field.                                                                     |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the custom field.                                           |
| `properties`                                                                                  | [components.CustomFieldDateProperties](../../models/components/customfielddateproperties.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |