# AttachedCustomFieldCreate

Schema to attach a custom field to a resource.

## Example Usage

```typescript
import { AttachedCustomFieldCreate } from "@polar-sh/sdk/models/components/attachedcustomfieldcreate.js";

let value: AttachedCustomFieldCreate = {
  customFieldId: "<value>",
  required: false,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `customFieldId`                                      | *string*                                             | :heavy_check_mark:                                   | ID of the custom field to attach.                    |
| `required`                                           | *boolean*                                            | :heavy_check_mark:                                   | Whether the value is required for this custom field. |