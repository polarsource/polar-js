# OAuth2ClientPublic

## Example Usage

```typescript
import { OAuth2ClientPublic } from "@polar-sh/sdk/models/components";

let value: OAuth2ClientPublic = {
  createdAt: new Date("2022-10-07T01:25:03.205Z"),
  modifiedAt: new Date("2023-06-17T08:39:45.405Z"),
  clientId: "<id>",
  clientName: "<value>",
  clientUri: "https://strange-scrap.org",
  logoUri: "https://worst-hoof.biz/",
  tosUri: "https://superior-travel.name",
  policyUri: "https://miserable-maestro.org",
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