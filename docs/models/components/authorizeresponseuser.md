# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components/authorizeresponseuser.js";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2025-04-26T05:22:55.984Z"),
    modifiedAt: new Date("2023-05-23T09:32:37.289Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://likable-saloon.info",
    logoUri: "https://whopping-pomelo.com/",
    tosUri: "https://far-off-velocity.net/",
    policyUri: "https://black-and-white-settler.biz",
  },
  sub: {
    id: "<value>",
    email: "Santiago25@gmail.com",
    avatarUrl: "https://chubby-seal.biz",
  },
  scopes: [
    "orders:read",
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