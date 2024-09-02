# ValidatedLicenseKey

## Example Usage

```typescript
import { ValidatedLicenseKey } from "@polar-sh/sdk/models/components";

let value: ValidatedLicenseKey = {
    id: "<value>",
    organizationId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    key: "<key>",
    displayKey: "<value>",
    status: "revoked",
    limitActivations: 699622,
    usage: 580197,
    limitUsage: 327720,
    validations: 716244,
    lastValidatedAt: new Date("2024-04-09T10:18:19.841Z"),
    expiresAt: new Date("2022-01-30T16:01:21.462Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
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