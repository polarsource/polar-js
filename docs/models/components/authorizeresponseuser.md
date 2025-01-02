# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2023-11-12T16:15:27.788Z"),
    modifiedAt: new Date("2025-07-16T13:12:18.198Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://ordinary-electronics.biz",
    logoUri: "https://showy-going.name",
    tosUri: "https://pushy-lox.com",
    policyUri: "https://distant-opera.com/",
  },
  sub: {
    id: "<value>",
    email: "Ford_Pouros@gmail.com",
    avatarUrl: "https://dual-metabolite.name/",
  },
  scopes: [
    "admin",
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