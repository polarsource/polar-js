# CustomFieldUpdateSelect

Schema to update a custom field of type select.

## Example Usage

```typescript
import { CustomFieldUpdateSelect } from "@polar-sh/sdk/models/components";

let value: CustomFieldUpdateSelect = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `metadata`                                                                                       | Record<string, *components.CustomFieldUpdateSelectMetadata*>                                     | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `slug`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [components.CustomFieldUpdateSelectType](../../models/components/customfieldupdateselecttype.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `properties`                                                                                     | [components.CustomFieldSelectProperties](../../models/components/customfieldselectproperties.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |