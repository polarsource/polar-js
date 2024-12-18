# AuthorizeResponseOrganization

## Example Usage

```typescript
import { AuthorizeResponseOrganization } from "@polar-sh/sdk/models/components";

let value: AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2023-12-14T04:05:55.302Z"),
    modifiedAt: new Date("2023-08-10T23:06:38.424Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://deficient-countess.name/",
    logoUri: "https://ambitious-fowl.net/",
    tosUri: "https://stable-possession.name",
    policyUri: "https://dual-metabolite.name/",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://oblong-brace.name/",
  },
  scopes: [
    "organizations:read",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://circular-thunderbolt.name/",
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `client`                                                                                                           | [components.OAuth2ClientPublic](../../models/components/oauth2clientpublic.md)                                     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `subType`                                                                                                          | [components.AuthorizeResponseOrganizationSubType](../../models/components/authorizeresponseorganizationsubtype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `sub`                                                                                                              | [components.AuthorizeOrganization](../../models/components/authorizeorganization.md)                               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `scopes`                                                                                                           | [components.Scope](../../models/components/scope.md)[]                                                             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `organizations`                                                                                                    | [components.AuthorizeOrganization](../../models/components/authorizeorganization.md)[]                             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |