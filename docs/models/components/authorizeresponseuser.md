# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components/authorizeresponseuser.js";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2024-01-29T12:13:57.857Z"),
    modifiedAt: new Date("2024-10-29T18:01:51.537Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://unhappy-kit.name/",
    logoUri: "https://gifted-celsius.org",
    tosUri: null,
    policyUri: "https://somber-populist.org",
  },
  subType: "user",
  sub: {
    id: "<value>",
    email: "Ignacio35@gmail.com",
    avatarUrl: "https://soulful-minion.net",
  },
  scopes: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `client`                                                                       | [components.OAuth2ClientPublic](../../models/components/oauth2clientpublic.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `subType`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `sub`                                                                          | [components.AuthorizeUser](../../models/components/authorizeuser.md)           | :heavy_check_mark:                                                             | N/A                                                                            |
| `scopes`                                                                       | [components.Scope](../../models/components/scope.md)[]                         | :heavy_check_mark:                                                             | N/A                                                                            |