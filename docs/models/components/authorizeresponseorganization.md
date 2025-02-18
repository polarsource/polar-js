# AuthorizeResponseOrganization

## Example Usage

```typescript
import { AuthorizeResponseOrganization } from "@polar-sh/sdk/models/components/authorizeresponseorganization.js";

let value: AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2025-03-04T18:09:48.048Z"),
    modifiedAt: new Date("2023-03-03T16:30:26.804Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://awful-charm.net",
    logoUri: "https://bulky-characterization.com/",
    tosUri: "https://overcooked-seafood.biz",
    policyUri: "https://unrealistic-lounge.org",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://wide-bin.net/",
  },
  scopes: [
    "custom_fields:write",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://noted-farm.biz/",
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