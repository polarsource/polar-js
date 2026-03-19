# TokenResponse

## Example Usage

```typescript
import { TokenResponse } from "@polar-sh/sdk/models/components/tokenresponse.js";

let value: TokenResponse = {
  accessToken: "<value>",
  tokenType: "Bearer",
  expiresIn: 903836,
  scope: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `accessToken`      | *string*           | :heavy_check_mark: | N/A                |
| `tokenType`        | *"Bearer"*         | :heavy_check_mark: | N/A                |
| `expiresIn`        | *number*           | :heavy_check_mark: | N/A                |
| `refreshToken`     | *string*           | :heavy_minus_sign: | N/A                |
| `scope`            | *string*           | :heavy_check_mark: | N/A                |
| `idToken`          | *string*           | :heavy_minus_sign: | N/A                |