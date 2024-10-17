# ValidatedLicenseKey

## Example Usage

```typescript
import { ValidatedLicenseKey } from "@polar-sh/sdk/models/components";

let value: ValidatedLicenseKey = {
  id: "<value>",
  organizationId: "<value>",
  userId: "<value>",
  user: {
    id: "<value>",
    publicName: "<value>",
    email: "Sydnee.Keeling8@yahoo.com",
    avatarUrl: "https://snappy-mainstream.net",
  },
  benefitId: "<value>",
  key: "<key>",
  displayKey: "<value>",
  status: "granted",
  limitActivations: 583240,
  usage: 882604,
  limitUsage: 217960,
  validations: 227669,
  lastValidatedAt: new Date("2024-03-31T06:46:07.766Z"),
  expiresAt: new Date("2024-06-09T00:20:30.007Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.LicenseKeyUser](../../models/components/licensekeyuser.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `benefitId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The benefit ID.                                                                               |
| `key`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `displayKey`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.LicenseKeyStatus](../../models/components/licensekeystatus.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `limitActivations`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usage`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `limitUsage`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `validations`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastValidatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activation`                                                                                  | [components.LicenseKeyActivationBase](../../models/components/licensekeyactivationbase.md)    | :heavy_minus_sign:                                                                            | N/A                                                                                           |