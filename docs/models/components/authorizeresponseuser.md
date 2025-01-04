# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2025-05-20T21:27:59.894Z"),
    modifiedAt: new Date("2025-07-14T20:57:49.279Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://baggy-shoulder.com",
    logoUri: "https://jumbo-lace.biz/",
    tosUri: "https://splendid-dredger.net/",
    policyUri: "https://corny-translation.info/",
  },
  sub: {
    id: "<value>",
    email: "Leonie.Bogisich@gmail.com",
    avatarUrl: "https://made-up-brush.com",
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