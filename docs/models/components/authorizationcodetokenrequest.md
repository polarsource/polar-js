# AuthorizationCodeTokenRequest

## Example Usage

```typescript
import { AuthorizationCodeTokenRequest } from "@polar-sh/sdk/models/components/authorizationcodetokenrequest.js";

let value: AuthorizationCodeTokenRequest = {
  grantType: "authorization_code",
  clientId: "<id>",
  clientSecret: "<value>",
  code: "<value>",
  redirectUri: "https://well-to-do-cellar.biz",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `grantType`        | *string*           | :heavy_check_mark: | N/A                |
| `clientId`         | *string*           | :heavy_check_mark: | N/A                |
| `clientSecret`     | *string*           | :heavy_check_mark: | N/A                |
| `code`             | *string*           | :heavy_check_mark: | N/A                |
| `redirectUri`      | *string*           | :heavy_check_mark: | N/A                |