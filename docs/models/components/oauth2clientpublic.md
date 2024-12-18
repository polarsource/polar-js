# OAuth2ClientPublic

## Example Usage

```typescript
import { OAuth2ClientPublic } from "@polar-sh/sdk/models/components";

let value: OAuth2ClientPublic = {
  createdAt: new Date("2022-03-17T04:26:37.100Z"),
  modifiedAt: new Date("2023-01-22T08:53:03.092Z"),
  clientId: "<id>",
  clientName: "<value>",
  clientUri: "https://snappy-cannon.com/",
  logoUri: "https://formal-status.net/",
  tosUri: "https://formal-farmer.name",
  policyUri: "https://idealistic-language.org",
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