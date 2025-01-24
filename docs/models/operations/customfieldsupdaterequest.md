# CustomFieldsUpdateRequest

## Example Usage

```typescript
import { CustomFieldsUpdateRequest } from "@polar-sh/sdk/models/operations/customfieldsupdate.js";

let value: CustomFieldsUpdateRequest = {
  id: "<value>",
  customFieldUpdate: {},
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `id`                           | *string*                       | :heavy_check_mark:             | The custom field ID.           |
| `customFieldUpdate`            | *components.CustomFieldUpdate* | :heavy_check_mark:             | N/A                            |