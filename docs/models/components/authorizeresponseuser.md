# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components/authorizeresponseuser.js";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2026-11-06T09:00:45.294Z"),
    modifiedAt: new Date("2026-02-22T00:03:05.093Z"),
    clientId: "<id>",
    clientName: null,
    clientUri: "https://bossy-formamide.com",
    logoUri: null,
    tosUri: "https://advanced-ferret.org/",
    policyUri: "https://pleasant-event.com/",
  },
  subType: "user",
  sub: {
    id: "<value>",
    email: "Molly.Quitzon@gmail.com",
    avatarUrl: null,
  },
  scopes: [
    "organizations:write",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `client`                                                                       | [components.OAuth2ClientPublic](../../models/components/oauth2clientpublic.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `subType`                                                                      | *"user"*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `sub`                                                                          | [components.AuthorizeUser](../../models/components/authorizeuser.md)           | :heavy_check_mark:                                                             | N/A                                                                            |
| `scopes`                                                                       | [components.Scope](../../models/components/scope.md)[]                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `scopeDisplayNames`                                                            | Record<string, *string*>                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |