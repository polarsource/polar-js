# CustomFieldUpdateNumber

Schema to update a custom field of type number.

## Example Usage

```typescript
import { CustomFieldUpdateNumber } from "@polar-sh/sdk/models/components";

let value: CustomFieldUpdateNumber = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `metadata`                                                                                       | Record<string, *components.CustomFieldUpdateNumberMetadata*>                                     | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `slug`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [components.CustomFieldUpdateNumberType](../../models/components/customfieldupdatenumbertype.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `properties`                                                                                     | [components.CustomFieldNumberProperties](../../models/components/customfieldnumberproperties.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |