# AuthorizeResponseOrganization

## Example Usage

```typescript
import { AuthorizeResponseOrganization } from "@polar-sh/sdk/models/components/authorizeresponseorganization.js";

let value: AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2025-11-11T12:00:22.100Z"),
    modifiedAt: new Date("2023-09-28T20:54:23.206Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://monstrous-range.net",
    logoUri: "https://wise-wallaby.org/",
    tosUri: "https://good-sticker.org",
    policyUri: "https://dearest-retention.name/",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://impish-finding.name/",
  },
  scopes: [
    "products:write",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://steep-privilege.name",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `client`                                                                               | [components.OAuth2ClientPublic](../../models/components/oauth2clientpublic.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `subType`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `sub`                                                                                  | [components.AuthorizeOrganization](../../models/components/authorizeorganization.md)   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `scopes`                                                                               | [components.Scope](../../models/components/scope.md)[]                                 | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `organizations`                                                                        | [components.AuthorizeOrganization](../../models/components/authorizeorganization.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |