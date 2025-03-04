# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components/authorizeresponseuser.js";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2024-03-19T06:22:16.956Z"),
    modifiedAt: new Date("2025-04-05T05:52:28.624Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://unaware-brochure.name",
    logoUri: "https://subdued-statue.info",
    tosUri: "https://acidic-polyester.com",
    policyUri: "https://measly-valley.com",
  },
  sub: {
    id: "<value>",
    email: "Ruthe68@yahoo.com",
    avatarUrl: "https://uncommon-configuration.net/",
  },
  scopes: [
    "subscriptions:read",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `client`                                                                       | [components.OAuth2ClientPublic](../../models/components/oauth2clientpublic.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `subType`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `sub`                                                                          | [components.AuthorizeUser](../../models/components/authorizeuser.md)           | :heavy_check_mark:                                                             | N/A                                                                            |
| `scopes`                                                                       | [components.Scope](../../models/components/scope.md)[]                         | :heavy_check_mark:                                                             | N/A                                                                            |