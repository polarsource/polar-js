# AuthorizeResponseOrganization

## Example Usage

```typescript
import { AuthorizeResponseOrganization } from "@polar-sh/sdk/models/components/authorizeresponseorganization.js";

let value: AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2024-01-18T21:12:05.315Z"),
    modifiedAt: new Date("2024-05-05T23:08:58.513Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://tinted-dulcimer.net",
    logoUri: "https://kaleidoscopic-publicity.net/",
    tosUri: "https://reasonable-assist.biz",
    policyUri: "https://bossy-crocodile.org/",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://murky-jellyfish.info",
  },
  scopes: [
    "customer_portal:read",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://edible-bowler.com",
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