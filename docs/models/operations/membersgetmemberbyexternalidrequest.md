# MembersGetMemberByExternalIdRequest

## Example Usage

```typescript
import { MembersGetMemberByExternalIdRequest } from "@polar-sh/sdk/models/operations/membersgetmemberbyexternalid.js";

let value: MembersGetMemberByExternalIdRequest = {
  externalId: "<id>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `externalId`              | *string*                  | :heavy_check_mark:        | The member external ID.   |
| `customerId`              | *string*                  | :heavy_minus_sign:        | The customer ID.          |
| `externalCustomerId`      | *string*                  | :heavy_minus_sign:        | The customer external ID. |