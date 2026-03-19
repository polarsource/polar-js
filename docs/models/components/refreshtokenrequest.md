# RefreshTokenRequest

## Example Usage

```typescript
import { RefreshTokenRequest } from "@polar-sh/sdk/models/components/refreshtokenrequest.js";

let value: RefreshTokenRequest = {
  grantType: "refresh_token",
  clientId: "<id>",
  clientSecret: "<value>",
  refreshToken: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `grantType`        | *"refresh_token"*  | :heavy_check_mark: | N/A                |
| `clientId`         | *string*           | :heavy_check_mark: | N/A                |
| `clientSecret`     | *string*           | :heavy_check_mark: | N/A                |
| `refreshToken`     | *string*           | :heavy_check_mark: | N/A                |