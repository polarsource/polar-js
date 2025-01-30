# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components/authorizeresponseuser.js";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2023-12-11T23:25:38.550Z"),
    modifiedAt: new Date("2024-11-23T19:18:21.236Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://well-off-cauliflower.net/",
    logoUri: "https://shameless-habit.net/",
    tosUri: "https://partial-coin.org",
    policyUri: "https://evil-hammock.net",
  },
  sub: {
    id: "<value>",
    email: "Sven_Swaniawski@hotmail.com",
    avatarUrl: "https://tepid-pepper.com",
  },
  scopes: [
    "external_organizations:read",
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