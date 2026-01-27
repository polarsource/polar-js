# PortalAuthenticatedUser

Information about the authenticated portal user.

## Example Usage

```typescript
import { PortalAuthenticatedUser } from "@polar-sh/sdk/models/components/portalauthenticateduser.js";

let value: PortalAuthenticatedUser = {
  type: "<value>",
  name: "<value>",
  email: "Hillard.Braun0@yahoo.com",
  customerId: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `type`                                                              | *string*                                                            | :heavy_check_mark:                                                  | Type of authenticated user: 'customer' or 'member'                  |
| `name`                                                              | *string*                                                            | :heavy_check_mark:                                                  | User's name, if available.                                          |
| `email`                                                             | *string*                                                            | :heavy_check_mark:                                                  | User's email address.                                               |
| `customerId`                                                        | *string*                                                            | :heavy_check_mark:                                                  | Associated customer ID.                                             |
| `role`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | Member role (owner, billing_manager, member). Only set for members. |