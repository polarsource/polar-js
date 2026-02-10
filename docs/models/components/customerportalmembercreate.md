# CustomerPortalMemberCreate

Schema for adding a new member to the customer's team.

## Example Usage

```typescript
import { CustomerPortalMemberCreate } from "@polar-sh/sdk/models/components/customerportalmembercreate.js";

let value: CustomerPortalMemberCreate = {
  email: "Germaine_Moen@hotmail.com",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `email`                                                        | *string*                                                       | :heavy_check_mark:                                             | The email address of the new member.                           |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | The name of the new member (optional).                         |
| `role`                                                         | [components.MemberRole](../../models/components/memberrole.md) | :heavy_minus_sign:                                             | N/A                                                            |