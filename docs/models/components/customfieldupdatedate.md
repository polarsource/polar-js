# CustomFieldUpdateDate

Schema to update a custom field of type date.

## Example Usage

```typescript
import { CustomFieldUpdateDate } from "@polar-sh/sdk/models/components";

let value: CustomFieldUpdateDate = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `metadata`                                                                                   | Record<string, *components.CustomFieldUpdateDateMetadata*>                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `slug`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `type`                                                                                       | [components.CustomFieldUpdateDateType](../../models/components/customfieldupdatedatetype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `properties`                                                                                 | [components.CustomFieldDateProperties](../../models/components/customfielddateproperties.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |