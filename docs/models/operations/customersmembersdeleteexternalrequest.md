# CustomersMembersDeleteExternalRequest

## Example Usage

```typescript
import { CustomersMembersDeleteExternalRequest } from "@polar-sh/sdk/models/operations/customersmembersdeleteexternal.js";

let value: CustomersMembersDeleteExternalRequest = {
  externalId: "<id>",
  memberExternalId: "<id>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `externalId`              | *string*                  | :heavy_check_mark:        | The customer external ID. |
| `memberExternalId`        | *string*                  | :heavy_check_mark:        | The member external ID.   |