# MembersUpdateMemberByExternalIdRequest

## Example Usage

```typescript
import { MembersUpdateMemberByExternalIdRequest } from "@polar-sh/sdk/models/operations/membersupdatememberbyexternalid.js";

let value: MembersUpdateMemberByExternalIdRequest = {
  externalId: "<id>",
  memberUpdate: {
    name: "Jane Doe",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `externalId`                                                       | *string*                                                           | :heavy_check_mark:                                                 | The member external ID.                                            |
| `customerId`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | The customer ID.                                                   |
| `externalCustomerId`                                               | *string*                                                           | :heavy_minus_sign:                                                 | The customer external ID.                                          |
| `memberUpdate`                                                     | [components.MemberUpdate](../../models/components/memberupdate.md) | :heavy_check_mark:                                                 | N/A                                                                |