# CustomerUpdatedFields

## Example Usage

```typescript
import { CustomerUpdatedFields } from "@polar-sh/sdk/models/components/customerupdatedfields.js";

let value: CustomerUpdatedFields = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `email`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `billingAddress`                                                 | [components.AddressDict](../../models/components/addressdict.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `taxId`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `metadata`                                                       | Record<string, *components.CustomerUpdatedFieldsMetadata*>       | :heavy_minus_sign:                                               | N/A                                                              |