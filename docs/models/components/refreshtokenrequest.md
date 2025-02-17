# RefreshTokenRequest

## Example Usage

```typescript
import { RefreshTokenRequest } from "@polar-sh/sdk/models/components/refreshtokenrequest.js";

let value: RefreshTokenRequest = {
  clientId: "<id>",
  clientSecret: "<value>",
  refreshToken: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `grantType`        | *string*           | :heavy_check_mark: | N/A                |
| `clientId`         | *string*           | :heavy_check_mark: | N/A                |
| `clientSecret`     | *string*           | :heavy_check_mark: | N/A                |
| `refreshToken`     | *string*           | :heavy_check_mark: | N/A                |