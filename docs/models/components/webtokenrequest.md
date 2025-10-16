# WebTokenRequest

## Example Usage

```typescript
import { WebTokenRequest } from "@polar-sh/sdk/models/components/webtokenrequest.js";

let value: WebTokenRequest = {
  grantType: "web",
  clientId: "<id>",
  clientSecret: "<value>",
  sessionToken: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `grantType`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `clientId`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `clientSecret`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `sessionToken`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `subType`                                                                              | [components.WebTokenRequestSubType](../../models/components/webtokenrequestsubtype.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `sub`                                                                                  | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `scope`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |