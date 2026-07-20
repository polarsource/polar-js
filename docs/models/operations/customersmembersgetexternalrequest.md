# CustomersMembersGetExternalRequest

## Example Usage

```typescript
import { CustomersMembersGetExternalRequest } from "@polar-sh/sdk/models/operations/customersmembersgetexternal.js";

let value: CustomersMembersGetExternalRequest = {
  externalId: "<id>",
  memberExternalId: "<id>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `externalId`              | *string*                  | :heavy_check_mark:        | The customer external ID. |
| `memberExternalId`        | *string*                  | :heavy_check_mark:        | The member external ID.   |