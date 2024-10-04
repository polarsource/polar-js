# LicenseKeyWithActivations

## Example Usage

```typescript
import { LicenseKeyWithActivations } from "@polar-sh/sdk/models/components";

let value: LicenseKeyWithActivations = {
  id: "<value>",
  organizationId: "<value>",
  userId: "<value>",
  benefitId: "<value>",
  key: "<key>",
  displayKey: "<value>",
  status: "disabled",
  limitActivations: 300779,
  usage: 257324,
  limitUsage: 664425,
  validations: 563154,
  lastValidatedAt: new Date("2023-07-09T04:57:58.789Z"),
  expiresAt: new Date("2022-07-14T06:31:19.124Z"),
  activations: [
    {
      id: "<value>",
      licenseKeyId: "<value>",
      label: "<value>",
      meta: {},
      createdAt: new Date("2022-09-10T18:58:43.516Z"),
      modifiedAt: new Date("2023-08-26T11:58:09.669Z"),
    },
  ],
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
| `activations`                                                                                 | [components.LicenseKeyActivationBase](../../models/components/licensekeyactivationbase.md)[]  | :heavy_check_mark:                                                                            | N/A                                                                                           |