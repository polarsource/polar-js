# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components/authorizeresponseuser.js";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2024-12-10T05:00:44.609Z"),
    modifiedAt: new Date("2024-07-08T11:05:22.587Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://dapper-godparent.org",
    logoUri: "https://subdued-lady.net",
    tosUri: "https://awful-swim.biz",
    policyUri: "https://oblong-finer.org",
  },
  sub: {
    id: "<value>",
    email: "Edgar15@hotmail.com",
    avatarUrl: "https://turbulent-impact.net",
  },
  scopes: [
    "products:read",
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