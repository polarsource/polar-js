# CustomerPortalMemberUpdate

Schema for updating a member in the customer portal.

## Example Usage

```typescript
import { CustomerPortalMemberUpdate } from "@polar-sh/sdk/models/components/customerportalmemberupdate.js";

let value: CustomerPortalMemberUpdate = {
  name: "Jane Doe",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | The new name for the member.                                   | Jane Doe                                                       |
| `role`                                                         | [components.MemberRole](../../models/components/memberrole.md) | :heavy_minus_sign:                                             | The new role for the member.                                   |                                                                |