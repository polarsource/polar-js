# CustomFieldUpdateCheckbox

Schema to update a custom field of type checkbox.

## Example Usage

```typescript
import { CustomFieldUpdateCheckbox } from "@polar-sh/sdk/models/components/customfieldupdatecheckbox.js";

let value: CustomFieldUpdateCheckbox = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                           | Record<string, *components.CustomFieldUpdateCheckboxMetadata*>                                       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `slug`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `properties`                                                                                         | [components.CustomFieldCheckboxProperties](../../models/components/customfieldcheckboxproperties.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |