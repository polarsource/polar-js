# AuthorizeResponseOrganization

## Example Usage

```typescript
import { AuthorizeResponseOrganization } from "@polar-sh/sdk/models/components";

let value: AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2023-06-16T15:13:24.972Z"),
    modifiedAt: new Date("2022-11-06T16:13:51.110Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://untidy-pliers.org",
    logoUri: "https://quick-ostrich.biz/",
    tosUri: "https://bitter-minister.biz",
    policyUri: "https://wordy-going.name/",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://married-quinoa.com",
  },
  scopes: [
    "license_keys:read",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://uncomfortable-charm.com/",
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