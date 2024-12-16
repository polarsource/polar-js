# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2024-04-11T19:55:00.706Z"),
    modifiedAt: new Date("2024-06-14T21:32:03.383Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://familiar-husband.info/",
    logoUri: "https://each-kettledrum.net",
    tosUri: "https://rare-electronics.org",
    policyUri: "https://enraged-chainstay.org/",
  },
  sub: {
    id: "<value>",
    email: "Justen.Stroman73@gmail.com",
    avatarUrl: "https://radiant-heartache.org",
  },
  scopes: [
    "files:read",
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