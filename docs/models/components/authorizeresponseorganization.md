# AuthorizeResponseOrganization

## Example Usage

```typescript
import { AuthorizeResponseOrganization } from "@polar-sh/sdk/models/components";

let value: AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2024-03-20T05:44:31.552Z"),
    modifiedAt: new Date("2023-09-14T04:31:24.353Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://dark-captain.biz/",
    logoUri: "https://difficult-ceramic.com",
    tosUri: "https://excellent-countess.info",
    policyUri: "https://outrageous-traditionalism.net",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://scented-pharmacopoeia.net",
  },
  scopes: [
    "articles:read",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://unruly-possession.info",
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