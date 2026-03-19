# CustomerPortalMemberUpdate

Schema for updating a member's role in the customer portal.

## Example Usage

```typescript
import { CustomerPortalMemberUpdate } from "@polar-sh/sdk/models/components/customerportalmemberupdate.js";

let value: CustomerPortalMemberUpdate = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `role`                                                         | [components.MemberRole](../../models/components/memberrole.md) | :heavy_minus_sign:                                             | The new role for the member.                                   |