# AuthorizeResponseUser

## Example Usage

```typescript
import { AuthorizeResponseUser } from "@polar-sh/sdk/models/components/authorizeresponseuser.js";

let value: AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2024-07-25T10:28:21.576Z"),
    modifiedAt: new Date("2024-01-19T15:23:14.662Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://squiggly-fowl.biz/",
    logoUri: "https://apprehensive-director.biz/",
    tosUri: "https://hoarse-secrecy.name",
    policyUri: "https://cultivated-suv.info/",
  },
  sub: {
    id: "<value>",
    email: "Frank.Boyer@yahoo.com",
    avatarUrl: "https://unsteady-doubter.com",
  },
  scopes: [
    "meters:write",
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