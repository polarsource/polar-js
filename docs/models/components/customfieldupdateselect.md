# CustomFieldUpdateSelect

Schema to update a custom field of type select.

## Example Usage

```typescript
import { CustomFieldUpdateSelect } from "@polar-sh/sdk/models/components";

let value: CustomFieldUpdateSelect = {};
```

## Fields

| Field                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                                                                                                                                                                               | Record<string, *string*>                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | Key-value object allowing you to store additional information.<br/><br/>The key must be a string with a maximum length of **40 characters**.<br/>The value must be a string with a maximum length of **500 characters**.<br/>You can store up to **50 key-value pairs**. |
| `name`                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |
| `slug`                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |
| `type`                                                                                                                                                                                                                                                   | [components.CustomFieldUpdateSelectType](../../models/components/customfieldupdateselecttype.md)                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |
| `properties`                                                                                                                                                                                                                                             | [components.CustomFieldSelectProperties](../../models/components/customfieldselectproperties.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |