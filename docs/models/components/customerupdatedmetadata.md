# CustomerUpdatedMetadata

## Example Usage

```typescript
import { CustomerUpdatedMetadata } from "@polar-sh/sdk/models/components/customerupdatedmetadata.js";

let value: CustomerUpdatedMetadata = {
  customerId: "<id>",
  customerEmail: "<value>",
  customerName: "<value>",
  customerExternalId: "<id>",
  updatedFields: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `customerId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `customerEmail`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `customerName`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `customerExternalId`                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updatedFields`                                                                      | [components.CustomerUpdatedFields](../../models/components/customerupdatedfields.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |