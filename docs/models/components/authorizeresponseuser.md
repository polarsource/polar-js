# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components/authorizeresponseuser.js";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2024-03-13T05:18:13.214Z"),
    modifiedAt: new Date("2024-01-21T03:47:17.857Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://best-glider.info",
    logoUri: "https://unhappy-charlatan.net",
    tosUri: "https://ample-rubric.name",
    policyUri: "https://inborn-pick.biz",
  },
  sub: {
    id: "<value>",
    email: "Eusebio_Rau@gmail.com",
    avatarUrl: "https://cheap-cook.net",
  },
  scopes: [
    "discounts:write",
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