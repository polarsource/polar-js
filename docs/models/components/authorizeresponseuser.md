# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components/authorizeresponseuser.js";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2025-07-01T10:51:36.392Z"),
    modifiedAt: new Date("2025-08-08T08:17:18.251Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://ordinary-wilderness.com/",
    logoUri: "https://sneaky-wombat.com/",
    tosUri: "https://sleepy-mythology.org/",
    policyUri: "https://near-nudge.net/",
  },
  sub: {
    id: "<value>",
    email: "Jarod_Adams@hotmail.com",
    avatarUrl: "https://well-made-coin.info",
  },
  scopes: [
    "license_keys:write",
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