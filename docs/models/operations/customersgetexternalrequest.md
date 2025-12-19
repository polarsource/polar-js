# CustomersGetExternalRequest

## Example Usage

```typescript
import { CustomersGetExternalRequest } from "@polar-sh/sdk/models/operations/customersgetexternal.js";

let value: CustomersGetExternalRequest = {
  externalId: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `externalId`                                                      | *string*                                                          | :heavy_check_mark:                                                | The customer external ID.                                         |
| `includeMembers`                                                  | *boolean*                                                         | :heavy_minus_sign:                                                | Include members in the response. Only populated when set to true. |