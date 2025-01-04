# AuthorizeResponseOrganization

## Example Usage

```typescript
import { AuthorizeResponseOrganization } from "@polar-sh/sdk/models/components";

let value: AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2024-07-11T12:00:35.437Z"),
    modifiedAt: new Date("2025-01-17T05:10:09.456Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://common-advertisement.info/",
    logoUri: "https://wry-information.biz",
    tosUri: "https://brown-ice-cream.name/",
    policyUri: "https://affectionate-overcoat.name",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://wealthy-disk.org",
  },
  scopes: [
    "organizations:read",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://downright-swordfish.net/",
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