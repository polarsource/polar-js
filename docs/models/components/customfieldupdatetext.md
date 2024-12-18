# CustomFieldUpdateText

Schema to update a custom field of type text.

## Example Usage

```typescript
import { CustomFieldUpdateText } from "@polar-sh/sdk/models/components";

let value: CustomFieldUpdateText = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `metadata`                                                                                   | Record<string, *components.CustomFieldUpdateTextMetadata*>                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `slug`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `type`                                                                                       | [components.CustomFieldUpdateTextType](../../models/components/customfieldupdatetexttype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `properties`                                                                                 | [components.CustomFieldTextProperties](../../models/components/customfieldtextproperties.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |