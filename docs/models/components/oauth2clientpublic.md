# OAuth2ClientPublic

## Example Usage

```typescript
import { OAuth2ClientPublic } from "@polar-sh/sdk/models/components/oauth2clientpublic.js";

let value: OAuth2ClientPublic = {
  createdAt: new Date("2023-01-27T01:11:49.017Z"),
  modifiedAt: new Date("2024-02-28T22:00:21.206Z"),
  clientId: "<id>",
  clientName: "<value>",
  clientUri: "https://crooked-hawk.org/",
  logoUri: "https://failing-lotion.com/",
  tosUri: "https://spherical-pants.com/",
  policyUri: "https://educated-waist.net",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `clientName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `clientUri`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `logoUri`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tosUri`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `policyUri`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |