# AuthorizeResponseOrganization

## Example Usage

```typescript
import { AuthorizeResponseOrganization } from "@polar-sh/sdk/models/components/authorizeresponseorganization.js";

let value: AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2023-08-09T18:04:08.797Z"),
    modifiedAt: new Date("2025-07-14T07:05:49.939Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://liquid-goodwill.org/",
    logoUri: "https://liquid-necklace.biz",
    tosUri: "https://gummy-cafe.net",
    policyUri: "https://flickering-cd.com/",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://graceful-premeditation.info/",
  },
  scopes: [
    "webhooks:write",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://gummy-climb.com",
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