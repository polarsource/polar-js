# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2024-04-14T16:58:20.839Z"),
    modifiedAt: new Date("2024-06-02T22:15:58.153Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://bright-testing.org",
    logoUri: "https://sour-diversity.biz",
    tosUri: "https://repentant-perp.info",
    policyUri: "https://frizzy-necklace.net",
  },
  sub: {
    id: "<value>",
    email: "Holly.Rutherford@hotmail.com",
    avatarUrl: "https://alienated-mom.info/",
  },
  scopes: [
    "metrics:read",
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