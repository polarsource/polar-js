# AuthorizeResponseOrganization

## Example Usage

```typescript
import { AuthorizeResponseOrganization } from "@polar-sh/sdk/models/components";

let value: AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2024-06-07T11:46:11.561Z"),
    modifiedAt: new Date("2024-06-29T03:29:33.064Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://glittering-convection.name",
    logoUri: "https://spiffy-apricot.info/",
    tosUri: "https://boring-pocket-watch.biz",
    policyUri: "https://funny-aftermath.name/",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://yellowish-brace.org/",
  },
  scopes: [
    "subscriptions:read",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://timely-cannon.name/",
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