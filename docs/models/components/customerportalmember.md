# CustomerPortalMember

A member of the customer's team as seen in the customer portal.

## Example Usage

```typescript
import { CustomerPortalMember } from "@polar-sh/sdk/models/components/customerportalmember.js";

let value: CustomerPortalMember = {
  createdAt: new Date("2024-07-08T08:06:52.701Z"),
  modifiedAt: new Date("2024-09-25T06:22:16.940Z"),
  id: "<value>",
  email: "Santino49@yahoo.com",
  name: "<value>",
  role: "member",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The email address of the member.                                                              |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the member.                                                                       |
| `role`                                                                                        | [components.MemberRole](../../models/components/memberrole.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |