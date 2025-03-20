# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components/authorizeresponseuser.js";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2024-01-08T02:30:31.934Z"),
    modifiedAt: new Date("2024-04-27T15:39:32.812Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://vibrant-someplace.name",
    logoUri: "https://great-in-joke.org",
    tosUri: "https://decisive-integer.name/",
    policyUri: "https://clumsy-event.org/",
  },
  sub: {
    id: "<value>",
    email: "Dalton_Olson75@hotmail.com",
    avatarUrl: "https://wide-king.com/",
  },
  scopes: [
    "checkouts:read",
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