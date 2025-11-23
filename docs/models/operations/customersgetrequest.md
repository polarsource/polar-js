# CustomersGetRequest

## Example Usage

```typescript
import { CustomersGetRequest } from "@polar-sh/sdk/models/operations/customersget.js";

let value: CustomersGetRequest = {
  id: "<value>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | The customer ID.                                                  |
| `includeMembers`                                                  | *boolean*                                                         | :heavy_minus_sign:                                                | Include members in the response. Only populated when set to true. |