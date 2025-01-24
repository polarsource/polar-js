# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components/authorizeresponseuser.js";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2023-01-28T01:28:09.985Z"),
    modifiedAt: new Date("2023-07-21T02:15:38.786Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://muted-partridge.info",
    logoUri: "https://colorful-commercial.org/",
    tosUri: "https://linear-piglet.com/",
    policyUri: "https://unfit-heating.info",
  },
  sub: {
    id: "<value>",
    email: "Rudy5@yahoo.com",
    avatarUrl: "https://ornery-arcade.org",
  },
  scopes: [
    "benefits:write",
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