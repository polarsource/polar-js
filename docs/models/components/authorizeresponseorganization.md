# AuthorizeResponseOrganization

## Example Usage

```typescript
import { AuthorizeResponseOrganization } from "@polar-sh/sdk/models/components";

let value: AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2024-07-18T14:44:10.552Z"),
    modifiedAt: new Date("2025-02-01T06:43:01.101Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://concrete-meadow.org/",
    logoUri: "https://little-elevation.net/",
    tosUri: "https://decent-zen.net/",
    policyUri: "https://stale-yin.biz",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://grounded-rawhide.net",
  },
  scopes: [
    "customer_portal:write",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://acceptable-representation.name/",
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