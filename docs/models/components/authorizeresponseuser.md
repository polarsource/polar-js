# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2023-06-04T16:24:12.271Z"),
    modifiedAt: new Date("2024-07-06T03:17:12.941Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://doting-disconnection.org/",
    logoUri: "https://damaged-information.name",
    tosUri: "https://spirited-account.biz",
    policyUri: "https://narrow-brush.biz",
  },
  sub: {
    id: "<value>",
    email: "Kaelyn_Schumm@hotmail.com",
    avatarUrl: "https://first-pension.com/",
  },
  scopes: [
    "openid",
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `client`                                                                                           | [components.OAuth2ClientPublic](../../models/components/oauth2clientpublic.md)                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `subType`                                                                                          | [components.AuthorizeResponseUserSubType](../../models/components/authorizeresponseusersubtype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `sub`                                                                                              | [components.AuthorizeUser](../../models/components/authorizeuser.md)                               | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `scopes`                                                                                           | [components.Scope](../../models/components/scope.md)[]                                             | :heavy_check_mark:                                                                                 | N/A                                                                                                |