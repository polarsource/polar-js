# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2023-06-16T14:07:15.875Z"),
    modifiedAt: new Date("2022-12-02T08:05:48.981Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://unfinished-casement.com/",
    logoUri: "https://miserly-accountability.com/",
    tosUri: "https://key-unibody.org",
    policyUri: "https://humble-tool.name/",
  },
  sub: {
    id: "<value>",
    email: "Precious.Pacocha@yahoo.com",
    avatarUrl: "https://low-tusk.com",
  },
  scopes: [
    "organizations:read",
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