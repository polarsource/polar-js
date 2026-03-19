# CustomFieldSelectProperties

## Example Usage

```typescript
import { CustomFieldSelectProperties } from "@polar-sh/sdk/models/components/customfieldselectproperties.js";

let value: CustomFieldSelectProperties = {
  options: [
    {
      value: "<value>",
      label: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `formLabel`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `formHelpText`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `formPlaceholder`                                                                          | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `options`                                                                                  | [components.CustomFieldSelectOption](../../models/components/customfieldselectoption.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |