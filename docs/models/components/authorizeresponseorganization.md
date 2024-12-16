# AuthorizeResponseOrganization

## Example Usage

```typescript
import { AuthorizeResponseOrganization } from "@polar-sh/sdk/models/components";

let value: AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2023-06-16T14:07:15.875Z"),
    modifiedAt: new Date("2022-12-02T08:05:48.981Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://unfinished-casement.com/",
    logoUri: "https://miserly-accountability.com/",
    tosUri: "https://key-unibody.org",
    policyUri: "https://humble-tool.name/",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://sticky-traffic.net/",
  },
  scopes: [
    "custom_fields:write",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://innocent-precedent.info",
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