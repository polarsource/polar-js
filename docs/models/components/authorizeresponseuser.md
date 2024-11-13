# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2022-07-19T21:06:20.014Z"),
    modifiedAt: new Date("2024-02-11T21:28:56.934Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://accomplished-certification.biz",
    logoUri: "https://impressionable-commercial.com",
    tosUri: "https://stunning-offset.name",
    policyUri: "https://glass-paintwork.net",
  },
  sub: {
    id: "<value>",
    email: "Cathy_Schroeder-Kulas@yahoo.com",
    avatarUrl: "https://sophisticated-in-joke.biz",
  },
  scopes: [
    "articles:write",
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