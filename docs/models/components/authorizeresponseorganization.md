# AuthorizeResponseOrganization

## Example Usage

```typescript
import { AuthorizeResponseOrganization } from "@polar-sh/sdk/models/components/authorizeresponseorganization.js";

let value: AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2023-05-21T04:29:40.711Z"),
    modifiedAt: new Date("2024-02-27T13:23:36.620Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://dense-presume.org/",
    logoUri: "https://complicated-ectoderm.org/",
    tosUri: "https://dearest-case.org/",
    policyUri: "https://polite-maestro.net",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://productive-recommendation.name/",
  },
  scopes: [
    "organizations:write",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://stupendous-jungle.name",
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