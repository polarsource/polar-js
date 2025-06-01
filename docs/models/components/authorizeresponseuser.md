# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components/authorizeresponseuser.js";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2024-01-29T12:13:57.857Z"),
    modifiedAt: new Date("2025-10-08T01:47:29.585Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://svelte-cinema.com",
    logoUri: "https://marvelous-pantyhose.net",
    tosUri: "https://gifted-celsius.org",
    policyUri: "https://lone-polyester.net/",
  },
  sub: {
    id: "<value>",
    email: "Verda17@hotmail.com",
    avatarUrl: "https://handy-vibraphone.com/",
  },
  scopes: [
    "customers:read",
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